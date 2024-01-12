import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.6em;
    margin-left: auto;
    background-color: transparent;
    border: none;
    color: inherit;
    font-weight: 600;
    cursor: pointer;

    ion-icon {
      font-size: 1.2rem;
    }
`;

export default function Button({changeTheme}){
    return (
      <StyledButton onClick={changeTheme}>
        <ion-icon className="icon" name="moon-outline"></ion-icon>
        <span>Dark Mode</span>
      </StyledButton>
    );
}