import React from 'react';
import {NavLink} from 'react-router-dom';

const navigation = () => {
    return (
        <div className="navigation">
            <NavLink to ='/' className={({isActive}) => isActive ? "nav_active" : ""} >
                Accueil
            </NavLink>
            <NavLink to ='/a-propos' className={({isActive}) => isActive ? "nav_active" : ""} >
                A Propos
            </NavLink>
            <NavLink to ='/News' className={({isActive}) => isActive ? "nav_active" : ""} >
                News
            </NavLink>
            
        </div>
    );
};

export default navigation;