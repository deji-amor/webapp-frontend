import React from 'react'
import BlueThemedMediumText from '../../../atoms/users/CreateTicketSuperAdmin/BlueThemedMediumText'
import BlueThemeSmall from '../../../atoms/users/CreateTicketSuperAdmin/BlueThemedSmall'
import BlueThemedLightText from '../../../atoms/users/CreateTicketSuperAdmin/BlueThemedLightText'
import HorizontalRule from '../../../atoms/users/CreateTicketSuperAdmin/HorizontalRule'
import { useSelector } from 'react-redux'

const CompanyNameAndPathToTemplate = () => {
  const {pathToTemplate} = useSelector((state) => state.ticketCreation);
  const {data} = useSelector((state) => state.authUser);
  const { workspaceName } = data;

  const path = pathToTemplate.slice(1).map((p, ind, arr) => {
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