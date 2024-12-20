interface TokenPayload {
  _id: string;
  role: Roles;
  username: string;
  email: string;
}
type Roles = "Customer" | "Owner";
