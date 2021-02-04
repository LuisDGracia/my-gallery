import { ProfileContainer, Photo, DesignerInfo, Name, Job, DataContainer, Data } from "./ProfileStyle";

export default function Profile() {
	return (
		<ProfileContainer>
			<Photo src="/assets/images/profilePhoto.png" />

			<DesignerInfo>
				<Name ><strong>User name</strong></Name>
				<Job >Job</Job>
			</DesignerInfo>

			<DataContainer>
				<Data>Data</Data>
				<Data>Data</Data>
				<Data>Data</Data>
			</DataContainer>

		</ProfileContainer>
	);
}
