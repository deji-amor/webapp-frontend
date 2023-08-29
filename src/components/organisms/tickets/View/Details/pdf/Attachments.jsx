import React from 'react'
import DetailText from "../DetailText";
import { styled } from '@mui/material';

const AttachmentButton = styled("button")`
	padding: 0.5rem;
	gap: 0.25rem;
	border-radius: 0.5rem;
	border: 1px solid #706e6e;
`;

const AttachmentText = styled("p")`
	color: #706e6e;
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem; /* 142.857% */
	letter-spacing: 0.00938rem;
`;

const DownloadText = styled("a")`
  display: inline-flex;
	color: #2b2e72;
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem; /* 142.857% */
	letter-spacing: 0.00938rem;
`;

const ClipIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
		<path
			d="M11.8294 8.29715L6.5185 13.7042C5.1746 15.0797 3.36356 14.948 2.20651 13.7627C1.03508 12.5774 0.90572 10.7482 2.264 9.36539L9.52253 1.97554C10.3131 1.1707 11.4917 1.03168 12.2606 1.81457C13.0296 2.60477 12.8859 3.79739 12.0954 4.59491L4.97337 11.8604C4.65716 12.1896 4.28345 12.0945 4.05348 11.875C3.84506 11.6482 3.75882 11.2677 4.07504 10.9385L9.04102 5.88265C9.29255 5.61925 9.30693 5.23878 9.06258 4.99001C8.81823 4.75588 8.44453 4.76319 8.19299 5.01928L3.20545 10.0971C2.42929 10.8873 2.45804 12.0945 3.14796 12.7969C3.89537 13.5579 5.02368 13.5359 5.79984 12.7457L12.9577 5.45096C14.352 4.03884 14.3017 2.17309 13.0799 0.92925C11.8798 -0.28532 10.0184 -0.373121 8.62419 1.04632L1.32255 8.48739C-0.495679 10.3458 -0.373506 13.0091 1.28661 14.6993C2.93954 16.3748 5.56268 16.5065 7.3809 14.6554L12.7278 9.21906C12.9721 8.97029 12.9721 8.51665 12.7206 8.28252C12.4834 8.01912 12.081 8.0557 11.8294 8.29715Z"
			fill="#706E6E"
		/>
	</svg>
);

const Attachments = ({ ticket}) => {
	const { scope_of_work_document } = ticket;
	// console.log(ticketInView);

	function removeDomainFromUrl(url) {
		const urlObject = new URL(url);
		const pathAndQuery = urlObject.pathname + urlObject.search + urlObject.hash;
		return pathAndQuery;
	}

	return (
		<>
			{scope_of_work_document && (
				<div className="flex">
					<div className="basis-[50%] py-[0.75rem]">
						<DetailText>Attachment(s)</DetailText>
					</div>
					<div className="basis-[50%] py-[0.75rem]">
						<AttachmentButton
							type="button"
							className="flex items-center justify-between space-x-[3rem]"
						>
							<AttachmentText className="flex items-center gap-[0.5rem]">
								<ClipIcon />
								<span className="max-w-[13rem] truncate">
									{removeDomainFromUrl(scope_of_work_document)}
								</span>
							</AttachmentText>
							<DownloadText href={`${scope_of_work_document}`} download>
								Download
							</DownloadText>
						</AttachmentButton>
					</div>
				</div>
			)}
		</>
	);
};

export default Attachments