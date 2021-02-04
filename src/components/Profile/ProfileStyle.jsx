import styled from 'styled-components'

const ProfileContainer = styled.div`
	width: 100%;

	background-color: rgba( 0, 0, 0, 0.5);

	display: flex;
	flex-direction: column;
	align-items: center; 
`;

const Photo = styled.img`
	width: 15%;

	border-radius: 10px;
`;

const DesignerInfo = styled.div`
	margin-bottom: 20px;
`

const DataContainer = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-evenly;
`;

const Data = styled.div`
	width: 30%;

	text-align: center;
`;

const Name = styled.p`
	margin: 0;
	font-size: 1.3em;
	text-align: center;
`

const Job = styled(Name)`
	font-size: 1em;
`

export {
  ProfileContainer,
  Photo,
  DesignerInfo,
  DataContainer,
  Data,
  Name,
  Job,
};
