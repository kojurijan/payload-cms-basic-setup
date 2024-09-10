const isAdminOrCreatedBy = ({ req: { user } }) => {
    // Scenario #1 - Check if user has the 'admin' role
    if (user && user.role === 'admin') {
      return true;
    }
    // Scenario #3 - Disallow all others
    return false;
  };

  export default isAdminOrCreatedBy;