export function requiresAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
     res.status(403).json('Requiere autenticacion')
    }
}
  
export function isLogedIn(req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect('/');
    } else {
      next();
    }
  }
  
export function isAdmin(req, res, next){
  if(req.user.username === "admin@admin.com") next()
  else res.status(403).json('Requiere permisos especiales')
}