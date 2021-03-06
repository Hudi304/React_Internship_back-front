import { ProfilePic } from './account-profile-pic/account-profile-pic';
import './account-profile-form.componet.scss';

import backgroudImage from '../../../../assets/shifaaz-shamoon-okVXy9tG3KY-unsplash.jpg';
import profilePicture from '../../../../assets/amonfUS.png';
import { DefaultButtom } from '../../../../common-components/components/button/button.component';
import FormDropDownItem from '../../../../common-components/components/input-drop-down/input-drop-down';

import { TextBox } from '../../../../common-components/components/text-box/text-box';
import { useState } from 'react';

import { cities,states,countries } from '../../../../constants/dummyData';

export interface FormObj {
  firstName: string;
  middleName: string;
  lastName: string;

  email: string;
  phoneNumber: string;
  fax: string;

  address: string;
  city: string;
  state: string;

  zipCode: string;
  country: string;

  oldPassword: string;
  newPassword: string;
  reNewpassword: string;
}

const fromObjInit: FormObj = {
  firstName: '',
  middleName: '',
  lastName: '',

  email: '',
  phoneNumber: '',
  fax: '',

  address: '',
  city: '',
  state: '',

  zipCode: '',
  country: '',

  oldPassword: '',
  newPassword: '',
  reNewpassword: ''
};

export default function AccountBody(): JSX.Element {
  const [fromObj, setFromObj] = useState<FormObj>(fromObjInit);

  function handleTBChange(e: React.ChangeEvent<HTMLInputElement>, key: string): void {
    setFromObj({ ...fromObj, [key]: e.target.value });
  }

  function handleDDChange( key: string, item : string): void {
    setFromObj({ ...fromObj, [key]: item });
  }


  return (
    <div className="user-profile-container debugON">
      <ProfilePic profilePicture={profilePicture} backgroudImage={backgroudImage} />
      <div className="profile-form debug">
        {/* de adaugat o valuare default care sa fie gri daca campul nu e completat */}
        <TextBox
          label="First Name*"
          type="text"
          enableHide={false}
          defaultText="Jennifer"
          onChange={e => handleTBChange(e, 'firstName')} />
        
        <TextBox
          label="Middle Name*"
          type="text"
          enableHide={false}
          defaultText="Enter name"
          onChange={e => handleTBChange(e, 'middleName')} />
        
        <TextBox
          label="Last Name*"
          type="text"
          enableHide={false}
          defaultText="Smith"
          onChange={e => handleTBChange(e, 'lastName')} />
        
        {/* ---------------------------------------------------------- */}

        <TextBox
          label="Email*"
          type="text"
          enableHide={false}
          defaultText="jennifer.s@gmail.com"
          onChange={e => handleTBChange(e, 'email')} />
        
       <TextBox
          label="Phone*"
          type="text"
          enableHide={false}
          defaultText="(091)121 5577"
          onChange={e => handleTBChange(e, 'phoneNumber')} />
        
        <TextBox
          label="Fax*"
          type="text"
          enableHide={false}
          defaultText="Enter fax number"
          onChange={e => handleTBChange(e, 'fax')} />
        
        {/* ---------------------------------------------------------- */}

        <TextBox
          label="Address*"
          type="text"
          enableHide={false}
          defaultText="Main Street 15"
          onChange={e => handleTBChange(e, 'address')} />

        <FormDropDownItem
          id="cityInput"
          options={cities}
          label="City*"
          defaultText="Jennifer"
          name = "city"
          onChange={handleDDChange}/>
        
        <FormDropDownItem
          id="stateInput"
          options={states}
          label="State*"
          defaultText="Jennifer"
          name = "state"
          onChange={handleDDChange}/>
        
        {/* ---------------------------------------------------------- */}

        <TextBox
          label="Zip Code*"
          type="text"
          enableHide={false}
          defaultText="Jennifer"
          onChange={e => handleTBChange(e, 'zipCode')} />

        <FormDropDownItem
          label="Country*"
          id="countryInput"
          options={countries}
          defaultText="Jennifer"
          name = "country"
          onChange={handleDDChange}/>

        <div className="profile-form-item"></div>

        {/* ---------------------------------------------------------- */}

        <div className="profile-form-item line">
          <hr />
        </div>
        <div className="profile-form-item line"></div>
        <div className="profile-form-item line"></div>
        {/* <!-- * CHANGE PASSWORD --> */}

        <div className="profile-form-item change-password-title">
          <label className="change-password-label debug-profile">
            <b>Change Password</b>
          </label><br />
        </div>

        {/* ---------------------------------------------------------- */}

        <TextBox
          label="Old Password*"
          type="password"
          enableHide={true}
          defaultText="1234567891011"
          onChange={e => handleTBChange(e, 'oldPassword')} />
        
        <TextBox
          label="New Password*"
          type="password"
          enableHide={true}
          defaultText="1234567891011"
          onChange={e => handleTBChange(e, 'newPassword')} />
        
        <TextBox
          label="Re-type Password*"
          type="password"
          enableHide={true}
          defaultText="1234567891011"
          onChange={e => handleTBChange(e, 'reNewpassword')} />

        <DefaultButtom formObj={fromObj} text="Save Changes" />
      </div>
    </div>
  );
}
