import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Rating, LeftArrow, Down } from "@bigbinary/neeto-icons";
import Dropdown from "../Dropdown";
import classnames from "classnames";

export const NeetoLogo = () => (
  <svg
    width="24"
    height="30"
    viewBox="0 0 24 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.2736 11.6825C23.2736 12.7582 23.2736 13.8292 23.2736 14.9097C23.2736 15.9901 23.2736 17.0612 23.3012 18.1369C23.3513 19.0326 23.1835 19.9271 22.813 20.7404C22.4295 21.5232 21.7718 22.13 20.9708 22.4399C20.075 22.8095 19.2621 22.953 18.4538 22.7812C17.6455 22.6094 16.8418 22.1245 15.9553 21.2394C14.3863 19.6623 12.8219 18.0765 11.2621 16.4821C9.70237 14.8877 8.1449 13.2973 6.58974 11.7107C6.34588 11.4268 6.07167 11.1718 5.77224 10.9504C5.60974 10.8442 5.42434 10.7801 5.23213 10.7637C5.03992 10.7473 4.84669 10.7791 4.6692 10.8562C4.46956 10.9198 4.28806 11.0321 4.1404 11.1834C3.99275 11.3348 3.88339 11.5206 3.82177 11.7248C3.72145 12.1283 3.68032 12.5448 3.69972 12.9606C3.69972 14.7182 3.70509 16.4782 3.71584 18.2405C3.71584 20.0012 3.71584 21.7714 3.6859 23.5227C3.66773 23.9637 3.74233 24.4036 3.90467 24.8126C4.06056 25.1923 4.3428 25.5033 4.70144 25.6907C4.88357 25.7895 5.08563 25.844 5.29178 25.8497C5.49793 25.8554 5.70258 25.8123 5.88969 25.7236C6.27623 25.5419 6.62673 25.2889 6.92365 24.9774C7.63752 24.2681 8.34755 23.5541 9.05374 22.8353C9.75994 22.1166 10.4546 21.39 11.1378 20.6556C11.2702 20.4971 11.4319 20.3668 11.6137 20.2723C11.7955 20.1778 11.9937 20.1208 12.1971 20.1048C12.5808 20.1066 12.9543 20.2309 13.2656 20.4602C13.5603 20.658 13.6962 21.084 13.687 21.5336C13.6889 21.9834 13.5291 22.4181 13.2379 22.7553C12.3905 23.631 11.55 24.5184 10.7049 25.3941C9.85972 26.2697 8.99387 27.136 8.10499 27.9669C7.45222 28.6004 6.61409 28.9973 5.71928 29.0968C4.81951 29.1678 3.91699 29.0008 3.09869 28.6119C2.34978 28.3105 1.71255 27.7761 1.27717 27.0842C0.869348 26.3642 0.671209 25.5402 0.70607 24.7091C0.726795 22.5387 0.724493 20.3684 0.72219 18.1958C0.719887 16.0231 0.72219 13.8551 0.72219 11.6825C0.704055 10.8192 0.879729 9.96324 1.23572 9.18024C1.61178 8.40876 2.26285 7.814 3.05493 7.51837C3.87619 7.17299 4.7785 7.08133 5.6502 7.25473C6.54851 7.47018 7.36281 7.95649 7.98754 8.65061C9.56727 10.2984 11.1608 11.9351 12.7682 13.5609C14.3755 15.1867 15.9783 16.8156 17.5764 18.4476C17.7943 18.6911 18.0447 18.9019 18.3202 19.0738C18.4586 19.1553 18.6129 19.2048 18.7721 19.2186C18.9313 19.2325 19.0915 19.2103 19.2414 19.1538C19.5304 19.0654 19.7926 18.9034 20.0036 18.683C20.218 18.4201 20.3252 18.083 20.303 17.7415C20.2799 15.7571 20.2799 13.7822 20.2799 11.8072C20.2799 9.83228 20.2799 7.85498 20.2799 5.88004C20.2945 5.58169 20.2482 5.2835 20.1441 5.00438C20.0783 4.86278 19.9859 4.73584 19.8721 4.63081C19.7583 4.52579 19.6254 4.44476 19.4809 4.39236C19.2001 4.25656 18.8934 4.18583 18.5828 4.18522C18.263 4.20798 17.9584 4.33318 17.7123 4.54302C16.8424 5.24139 16.0235 6.00373 15.2621 6.82397C14.4907 7.62901 13.7377 8.45523 12.9317 9.22732C12.6318 9.55796 12.2335 9.77808 11.7987 9.85346C11.6074 9.86436 11.4162 9.83036 11.2398 9.75406C11.0634 9.67776 10.9064 9.56119 10.7808 9.41328C10.6324 9.26574 10.5162 9.08771 10.44 8.89092C10.3638 8.69413 10.3293 8.48306 10.3387 8.27163C10.369 7.8159 10.5654 7.38835 10.8891 7.07348C11.7043 6.24176 12.5179 5.41004 13.3301 4.57832C14.1422 3.7466 14.9597 2.92116 15.7825 2.102C16.2981 1.61189 16.9191 1.25256 17.5956 1.05302C18.272 0.853477 18.9849 0.819312 19.6766 0.953284C20.3709 1.05328 21.0326 1.31833 21.6085 1.72714C22.1844 2.13595 22.6585 2.67713 22.9926 3.30721C23.0951 3.51003 23.1725 3.72511 23.2229 3.94747C23.272 4.17227 23.2952 4.40216 23.292 4.63246C23.2828 5.80472 23.2828 6.98168 23.292 8.16335C23.3012 9.34502 23.2951 10.5181 23.2736 11.6825Z"
      fill="white"
    />
  </svg>
);

export const ProfileSection = ({ collapsed, profileInfo, onClick }) => {
  return (
    <div className="nui-sidebar__profile-wrapper" onClick={onClick}>
      <div className="nui-sidebar__profile">
        <div className="nui-sidebar__avatar">JM</div>
        {!collapsed && (
          <div className="nui-sidebar__profile-content">
            <div className="nui-sidebar__profile-info">
              <h4>{profileInfo.name}</h4>
              <p>{profileInfo.email}</p>
            </div>
            <Down size={16} />
          </div>
        )}
      </div>
    </div>
  );
};

const Sidebar = ({
  organizationInfo,
  navLinks,
  profileInfo,
  collapsible = true,
  showChangelog = false,
}) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const Logo = organizationInfo?.logo;
  const LogoSVG = Logo;

  return (
    <div
      className={classnames("nui-sidebar", {
        "nui-sidebar--collapsed": collapsed,
      })}
    >
      <div className="nui-sidebar__header">
        <div className="nui-sidebar__logo">
          {Logo ? LogoSVG : <NeetoLogo />}
        </div>
        {!collapsed && organizationInfo && (
          <div className="nui-sidebar__info">
            <h2>{organizationInfo.name}</h2>
            <p>{organizationInfo.subdomain}</p>
          </div>
        )}
      </div>

      <div className="nui-sidebar__links">
        {navLinks.map(
          (
            { label: mainLabel, to: mainRoute, icon, items, ...otherProps },
            mainIndex
          ) => {
            const IconSVG = icon;
            const isActive = location.pathname.includes(mainRoute);
            return (
              <React.Fragment key={mainIndex}>
                <NavLink
                  to={items ? items[0].to : mainRoute}
                  className="nui-sidebar__link"
                  activeClassName="active"
                  isActive={() => {
                    return isActive;
                  }}
                  {...otherProps}
                >
                  {icon && <IconSVG />}
                  {!collapsed && <span>{mainLabel}</span>}
                </NavLink>
                {items && isActive && (
                  <>
                    {items.map(
                      (
                        { label: subLabel, to: subRoute, ...otherProps },
                        subIndex
                      ) => {
                        return (
                          <NavLink
                            key={subIndex}
                            to={subRoute}
                            className="nui-sidebar__sublink"
                            activeClassName="active"
                            {...otherProps}
                          >
                            {subLabel}
                          </NavLink>
                        );
                      }
                    )}
                  </>
                )}
              </React.Fragment>
            );
          }
        )}
      </div>

      <div className="nui-sidebar__footer">
        {profileInfo && (
          <Dropdown
            customTarget={() => (
              <ProfileSection
                collapsed={collapsed}
                profileInfo={profileInfo}
                onClick={() => {
                  setIsProfileDropdownOpen(!isProfileDropdownOpen);
                }}
              />
            )}
            isOpen={isProfileDropdownOpen}
            position={collapsed ? "bottom-end" : "bottom"}
            buttonProps={{
              icon: Down,
            }}
            closeOnSelect={true}
            closeOnOutsideClick={true}
          >
            {profileInfo.dropdownProps?.map((item, idx) => (
              <li key={idx} onClick={item.onClick}>
                {item.label}
              </li>
            ))}
          </Dropdown>
        )}

        <div className="nui-sidebar__links">
          {showChangelog && (
            <div className="nui-sidebar__link">
              <Rating />
              {!collapsed && <span>What's New</span>}
            </div>
          )}
          {collapsible && (
            <div
              className="nui-sidebar__link"
              onClick={() => setCollapsed(!collapsed)}
            >
              <LeftArrow />
              {!collapsed && <span>Collapse</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;