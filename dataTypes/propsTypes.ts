import { Dispatch, SetStateAction } from "react";

//props type for auth modal open and clone
//used in : components/layuout/navbar
//used in : components/layout/AuthModal

export type AuthModalPropsType = {
  authModalOpen: boolean;
  setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
};

export type NavbarPropsType = {
  authModalOpen: boolean;
  setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
  setDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  drawerVisible: boolean;
};

export type LoginPagePropsType = {
  setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
};
