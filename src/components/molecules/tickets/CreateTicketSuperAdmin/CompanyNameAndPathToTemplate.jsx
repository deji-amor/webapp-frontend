import React from 'react'
import BlueThemedMediumText from '../../../atoms/tickets/CreateTicketSuperAdmin/BlueThemedMediumText'
import BlueThemeSmall from '../../../atoms/tickets/CreateTicketSuperAdmin/BlueThemedSmall'
import BlueThemedLightText from '../../../atoms/tickets/CreateTicketSuperAdmin/BlueThemedLightText'
import { useSelector } from 'react-redux'

const CompanyNameAndPathToTemplate = () => {
  const {pathToTemplate} = useSelector((state) => state.ticketCreation);
  const {data} = useSelector((state) => state.authUser);
  const { workspaceName } = data;

  const path = pathToTemplate.slice().map((p, ind, arr) => {
    return ind === arr.length - 1 ? (
			<BlueThemeSmall key={p}>{p}</BlueThemeSmall>
		) : (
			<BlueThemedLightText key={p}>{p}/</BlueThemedLightText>
		);
  })

  return (
		<div>
      <div className='mb-[0.75rem]'>
        <BlueThemedMediumText>{ workspaceName } </BlueThemedMediumText> {" "}
        <BlueThemedLightText>-</BlueThemedLightText> {" "}
        {path}
      </div>
		</div>
	);
}

export default CompanyNameAndPathToTemplate