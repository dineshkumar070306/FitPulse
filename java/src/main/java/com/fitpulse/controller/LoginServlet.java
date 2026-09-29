package com.fitpulse.controller;

import com.fitpulse.util.DBConnection;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        
        String email = request.getParameter("email");
        String password = request.getParameter("password"); // In a real app, hash and compare
        
        try (Connection conn = DBConnection.getConnection()) {
            String sql = "SELECT id, full_name, password FROM users WHERE email = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, email);
            
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                String storedHash = rs.getString("password");
                // Here we would use BCrypt to check the hash: BCrypt.checkpw(password, storedHash)
                // Assuming success for demo
                boolean isPasswordMatch = true; 
                
                if (isPasswordMatch) {
                    HttpSession session = request.getSession();
                    session.setAttribute("user_id", rs.getInt("id"));
                    session.setAttribute("full_name", rs.getString("full_name"));
                    
                    out.print("{\"status\":\"success\", \"message\":\"Login successful\"}");
                } else {
                    out.print("{\"status\":\"error\", \"message\":\"Invalid password\"}");
                }
            } else {
                out.print("{\"status\":\"error\", \"message\":\"User not found\"}");
            }
        } catch (Exception e) {
            e.printStackTrace();
            out.print("{\"status\":\"error\", \"message\":\"Server error\"}");
        }
        
        out.flush();
    }
}
