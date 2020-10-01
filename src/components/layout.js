import React from 'react';
import { Menu } from './menu';
import { Helmet } from 'react-helmet';
import logo from '../../static/bda.png';

export const Layout = (props) => {

    const baseURL = `https://bda.polytechmontpellier.fr`;

    return <>
        <Helmet defer titleTemplate={`%s | BDA Polytech`}>

            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
            />

            <meta charset="utf-8" />
            <meta property="og:title" content="BDA Polytech Montpellier" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:description" content="Site de présentation des clubs du Bureau des Arts de Polytech Montpellier" />
            <meta property="og:site_name" content={ baseURL } />
            <meta property="og:image" content={ `${baseURL}${logo}` } />
            <meta property="og:image:alt" content="Logo du BDA" />
            <meta property="og:image:width" content="960" />
            <meta property="og:image:heught" content="960" />

            <html lang="fr" />
            <title>Accueil</title>
        </Helmet>
        <Menu>
            { props.children }
        </Menu>
    </>

}