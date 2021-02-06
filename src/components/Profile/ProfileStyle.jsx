import styled from 'styled-components'

const ProfileContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Photo = styled.img`
  width: 15%;

  border-radius: 10px;

  @media screen and (max-width: 426px) {
    width: 35%;
  }
`;

const DesignerInfo = styled.div`
	margin-bottom: 20px;
`

const DataContainer = styled.div`
  width: 40%;

  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 426px) {
    width: 100%;
  }
`;

const Data = styled.div`
  width: 30%;

  padding: 10px 0;

  background-color: #e5e5e5;
  border-radius: 10px;

  text-align: center;

  @media screen and (max-width: 426px) {
    width: 30%;
  }
`;

const Name = styled.p`
	margin: 0 0 10px 0;
	font-size: 1.3em;
	text-align: center;
`

const SubText = styled(Name)`
  font-size: 1em;
	color: #BDBDBD;
`;

const Number = styled.p`
	margin: 0;
	color: #4E5150;
	font-weight: bold;
`;

export {
  ProfileContainer,
  Photo,
  DesignerInfo,
  DataContainer,
  Data,
  Name,
	SubText,
	Number,
};
