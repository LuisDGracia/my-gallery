import Grid from "../Grid/Grid";
import Profile from "../Profile/Profile";

import { LayoutContainer } from "./LayoutStyled";

export default function Layout() {
  return (
    <LayoutContainer >
      <Profile />
      <Grid />
    </LayoutContainer>
  )
}
