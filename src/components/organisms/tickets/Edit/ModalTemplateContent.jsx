import React from 'react'
import CompanyNameAndPathToTemplate from './CompanyNameAndPathToTemplate';

const ModalTemplateContent = () => {
  return (
		<div className="container mx-auto">
			<div className="">
				<CompanyNameAndPathToTemplate />
			</div>
			<div className="max-w-[20rem] mb-[0.75rem]">
				{/* <HorizontalRule /> */}
			</div>
			<div className="">
				{/* <MainTicketCreationForm /> */}
			</div>
		</div>
	);
}

export default ModalTemplateContent