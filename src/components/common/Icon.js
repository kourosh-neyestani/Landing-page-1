import React from "react";

function Icon(props) {
    const { label, title, subtitle, children, className } = props;

    return (
        <div className={`el-icon ${className}`}>
            <div className="el-icon-circle">
                <div className="el-icon-inner">{children}</div>
            </div>
            {label && <span className="el-icon-label">{label}</span>}
            {title && <span className="el-icon-title">{title}</span>}
            {subtitle && <span className="el-icon-subtitle">{subtitle}</span>}
        </div>
    );
}
export default Icon;
