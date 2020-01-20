import React from 'react';
import { connect } from 'react-redux';

import NavShortCut from './nav-short-cut/nav-short-cut.component';

import profileDefaultImg from '../../../assets/logos/nav/profile-default.jpg';

import {
  NavProfileContainer,
  MainInfoContainer,
  ProfileInfoContainer,
  SectionImage,
  ResumeContainer,
  ViewProfileLink,
  ShortCutsContainer
} from './nav-profile-dropdown.styles';

const profile = {
  firtsname: 'Usario',
  lastname: 'Prueba',
  Headline: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdas'
};

const profileShortcuts = [
  {
    id: '0',
    sectionName: 'PROFILE',
    sectionLinks: [
      {
        id: '0',
        name: 'DashBoard',
        link: ''
      },
      {
        id: '1',
        name: 'Networks',
        link: 'Language'
      },
      {
        id: '2',
        name: 'Training',
        link: ''
      }
    ]
  },
  {
    id: '1',
    sectionName: 'CONFIGURATION',
    sectionLinks: [
      {
        id: '0',
        name: 'Settings & Privacy',
        link: ''
      },
      {
        id: '1',
        name: 'Premium subscription settings',
        link: 'Language'
      },
      {
        id: '2',
        name: '',
        link: ''
      }
    ]
  },
  {
    id: '2',
    sectionName: 'NEED HELP?',
    sectionLinks: [
      {
        id: '0',
        name: 'Open Quick Help',
        link: ''
      }
    ]
  }
];

const NavProfileDropDown = () => {
  return (
    <NavProfileContainer>
      <ProfileInfoContainer>
        <MainInfoContainer>
          <SectionImage src={profileDefaultImg} alt="profileImg" />
          <ResumeContainer>
            <h3>{profile.firtsname + ' ' + profile.lastname}</h3>
            <p>{profile.Headline}</p>
          </ResumeContainer>
        </MainInfoContainer>
        <ViewProfileLink>View Profile</ViewProfileLink>
      </ProfileInfoContainer>
      <ShortCutsContainer>
        {profileShortcuts.map(({ id, ...otherProps }) => (
          <NavShortCut key={id} {...otherProps} />
        ))}
      </ShortCutsContainer>
    </NavProfileContainer>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavProfileDropDown);
