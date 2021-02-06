import { GridContainer, Image } from "./GridStyle";

export default function Grid() {
  return (
    <GridContainer>
      <Image src="/assets/images/photo1.png" column="1/2" row="1/2" />
      <Image src="/assets/images/photo2.png" column="2/4" row="1/2" />
      <Image src="/assets/images/photo3.png" column="1/3" row="2/3" />
      <Image src="/assets/images/photo4.png" column="" row="2/-1" />
      <Image src="/assets/images/photo5.png" column="" row="" />
      <Image src="/assets/images/photo6.png" column="" row="" />
    </GridContainer>
  )
}
