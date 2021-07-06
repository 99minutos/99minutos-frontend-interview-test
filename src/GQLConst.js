const GQLConst = {
	LAST_TEN_MISSIONS: `
	{
		launchesPast(limit: 10) {
			mission_name
			launch_date_local
			launch_site {
				site_name_long
			}
			links {
				article_link
				video_link
			}
			details
			id
		}
	}`,
};

export default GQLConst;
