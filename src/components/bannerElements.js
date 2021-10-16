import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  height: 80vh;
`;
export const BgImage = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 100%;
  left: 0;
  top: 0;
  filter: brightness(0.85);
`;
export const Content = styled.div``;

export const pageTransition = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
