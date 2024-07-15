import styled from "styled-components";

import { useLogout } from "../features/authentication/useLogout";
import Logout from "./logout";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

export default function Header() {
  const { logout, isLoading } = useLogout();
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
}
