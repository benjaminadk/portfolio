import React from 'react';
import { Tooltip } from 'react-bootstrap'; 

export const githubTooltip = 
    <Tooltip id="githubTooltip">
    <img height={150} width={225} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/popup-github.svg" alt="git"/>
    <strong>Github Profile</strong>
    </Tooltip>;
        
export const jekyllTooltip = 
    <Tooltip id="jekyllTooltip">
    <img height={150} width={195} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/popup-jekyll.svg" alt="jekyll"/>
    <strong>My Jekyll Blog</strong>
    </Tooltip>;
