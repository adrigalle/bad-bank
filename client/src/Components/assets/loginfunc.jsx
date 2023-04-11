export const loginfunc = async () => {
    const { user, setUser } = useContext(UserContext);
    setUser()

    return user;
  };