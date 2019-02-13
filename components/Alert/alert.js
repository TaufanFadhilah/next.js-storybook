import React from 'react';

export const PrimaryAlert = props => (
    <div className="alert alert-primary" role="alert">
        {props.text}
    </div>
)

export const SecondaryAlert = props => (
    <div className="alert alert-secondary" role="alert">
        {props.text}
    </div>
)

export const SuccessAlert = props => (
    <div className="alert alert-success" role="alert">
        {props.text}
    </div>
)

export const DangerAlert = props => (
    <div className="alert alert-danger" role="alert">
        {props.text}
    </div>
)

export const WarningAlert = props => (
    <div className="alert alert-warning" role="alert">
        {props.text}
    </div>
)

export const InfoAlert = props => (
    <div className="alert alert-info" role="alert">
        {props.text}
    </div>
)

export const LightAlert = props => (
    <div className="alert alert-light" role="alert">
        {props.text}
    </div>
)

export const DarkAlert = props => (
    <div className="alert alert-dark" role="alert">
        {props.text}
    </div>
)
