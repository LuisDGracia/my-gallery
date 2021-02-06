import { ProfileContainer, Photo, DesignerInfo, Name, SubText, DataContainer, Data, Number } from "./ProfileStyle";

export default function Profile() {
	return (
		<ProfileContainer>
			<Photo src="/assets/images/profilePhoto.png" />

			<DesignerInfo>
				<Name ><strong>Rodney Cotton</strong></Name>
				<SubText >Helsinki, Finland</SubText>
			</DesignerInfo>

			<DataContainer>
				<Data>
					<Number >100</Number>
					<SubText >Posts</SubText>
				</Data>
				<Data>
					<Number >2,242</Number>
					<SubText >Follower</SubText>
				</Data>
				<Data>
					<Number >1,432</Number>
					<SubText >Following</SubText>
				</Data>
			</DataContainer>

		</ProfileContainer>
	);
}
