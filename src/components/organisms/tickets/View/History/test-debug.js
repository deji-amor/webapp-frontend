    const oldDetails = {
      id: 123,
      user_id: 4,
      workspace_id: 12,
      ticket_type: 'project ticket',
      ticket_form: 'IT Project Management',
      ticket_path: [ 'Project Tickets', 'IT Project Management' ],
      point_of_contact_name: 'Richard',
      point_of_contact_phone_number: '07945667823',
      point_of_contact_address: 'i added an address here',
      number_of_technicians: 3,
      scope_of_work_description: 'g9779977g9gg7fd75d6d65 f6f76f7f7 f68f7f75d654',
      scope_of_work_document: '',
      start_date_time: '2023-08-29T22:04:00.000Z',
      end_date_time: '2023-09-08T22:04:00.000Z',
      hardware_quantity: 1,
      hardware_name: '',
      hardware_component_type_list: [],
      hardware_component_type_quantity: 1,
      locations: [ { address: '8h9h8h980h80', type: 'governmental' } ],
      materials_description: '',
      number_of_work_station: 'undefined',
      number_of_work_systems: '1',
      software_customization_quantity: 1,
      software_customization_name: '',
      software_installation_quantity: 1,
      software_installation_name: '',
      pick_locations: [],
      drop_off_locations: [],
      customer_id: 20,
      additional_fields: [],
      status: 'PENDING',
      created_at: '2023-08-26T20:15:30.000Z'
    }

    const newDetailsParsed = {
      customerId: 20,
      pointOfContactName: 'Richard',
      pointOfContactPhoneNumber: '07945667823',
      pointOfContactAddress: 'i added an address here',
      numberOfTechnicians: 3,
      scopeOfWorkDescription: 'g9779977g9gg7fd75d6d65 f6f76f7f7 f68f7f75d654',
      scopeOfWorkDocument: null,
      scopeOfWorkDocumentUrl: '',
      startDateTime: '2023-08-29T23:04',
      endDateTime: '2023-09-08T23:04',
      hardwareComponentTypeList: [],
      hardwareComponentTypeQuantity: '1',
      hardwareQuantity: '1',
      hardwareName: '',
      softwareInstallationQuantity: '1',
      softwareInstallationName: '',
      softwareCustomizationQuantity: '1',
      softwareCustomizationName: '',
      numberOfWorkstation: '1',
      numberOfWorkSystems: '1',
      locations: [
        { address: 'uigg9797', type: 'governmental' },
        { address: 'g77g7gg97', type: 'governmental' }
      ],
      numberOfLocation: 1,
      pickLocations: [],
      numberOfPickLocation: 1,
      dropOffLocations: [],
      numberOfDropLocation: 1,
      materialsDescription: '',
      additionalFields: [
        {
          name: 'testing1',
          value: 'testing2',
          isValid: true,
          isTouched: false,
          hasError: false
        }
      ],
      ticketType: 'project ticket',
      ticketPath: [ 'Project Tickets', 'IT Project Management' ],
      ticketForm: 'IT Project Management',
      ticketId: 123
    }

    const t = [
    { start_date_time: [ '2023-08-29T22:04:00.000Z', '2023-08-29T23:04' ] },
    { end_date_time: [ '2023-09-08T22:04:00.000Z', '2023-09-08T23:04' ] },
    {
      locations: [
        [ { address: '8h9h8h980h80', type: 'governmental' } ],
        [
          { address: 'uigg9797', type: 'governmental' },
          { address: 'g77g7gg97', type: 'governmental' }
        ]
      ]
    },
    {
      additional_fields: [
        [], [
          {
            name: 'testing1',
            value: 'testing2',
            isValid: true,
            isTouched: false,
            hasError: false
          }
        ]
      ]
    }
  ]