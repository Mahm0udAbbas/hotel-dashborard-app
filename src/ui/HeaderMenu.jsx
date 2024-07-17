import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import styled from "styled-components";
import Logout from "./logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4 rem;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />{" "}
      </li>
    </StyledHeaderMenu>
  );
}
