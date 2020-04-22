import React, { useState } from 'react';
import { Edit, View } from '~/assets/image';
import CardHeader from '~/components/cardheader/CardHeader';
import AddPersonalInformation from '~/components/form/personalinformation/AddPersonalInformation';

const PersonalInformation = () => {
  const [showModel, setModal] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  return (
    <div className="personal-info-block">
      <div className="card">
        <CardHeader
          title="Personal Information"
          icon={Edit}
          component={AddPersonalInformation}
          onEdit={editBtnHandler}
          onClose={closeBtnHandler}
          showModal={showModel}
        />
        <div className="personal-info">
          <div className="personal-info-row">
            <div className="personal-info-row__item">
              <div className="personal-info-row__label">Your Name</div>
              <div className="personal-info-row__value  personal-info-row__value--strong">Ribby McFroggy</div>
            </div>
          </div>
          <div className="personal-info-row">
            <div className="personal-info-row__item">
              <div className="personal-info-row__label">Your Role</div>
              <div className="personal-info-row__value  personal-info-row__value--strong">Engineering manager</div>
            </div>
            <div className="personal-info-row__icon">
              <img src={View} alt="View" />
            </div>
          </div>
          <div className="personal-info-row">
            <div className="personal-info-row__item">
              <div className="personal-info-row__label">Your Introduction</div>
              <p className="personal-info-row__value">
                My name is Ribby and I am currently the Engineering Manager at Leapfrog. I love to challenge the normal
                and help build extraordinary product expeirences.
              </p>
            </div>
            <div className="personal-info-row__icon">
              <img src={View} alt="View" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
