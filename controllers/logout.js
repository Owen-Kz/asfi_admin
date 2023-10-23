const logout = async (req,res) => {
    // Clear the user's session or token (JWT) on the server
      // You can do this by clearing the cookie set during login
      res.clearCookie('adminRegistered');
    
      // Redirect the user to the login page or a logout success page
      res.redirect('/admin/login');
    }
    
    module.exports = logout;
    