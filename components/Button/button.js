import React from 'react';

export const DefaultButton = props => (
    <button className="btn btn-default">{props.children}</button>
)

export const PrimaryButton = props => (
    <button className="btn btn-primary">{props.children}</button>
)

export const InfoButton = props => (
    <button className="btn btn-info">{props.children}</button>
)

export const SuccessButton = props => (
    <button className="btn btn-success">{props.children}</button>
)

export const WarningButton = props => (
    <button className="btn btn-warning">{props.children}</button>
)

export const DangerButton = props => (
    <button className="btn btn-danger">{props.children}</button>
)