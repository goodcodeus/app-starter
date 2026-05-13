import { FC, useId } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Avatar, NavigationBar, NavigationButton } from 'reablocks';
import { useAuth } from 'core/Auth';

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M5.30176 8.47441C5.52876 7.90241 6.47027 7.90241 6.69727 8.47441L7.49902 10.5008L9.52539 11.3025C9.81225 11.4156 9.99897 11.6929 9.99902 11.9998C9.99902 12.3067 9.81025 12.584 9.52441 12.6971L7.49805 13.4988L6.69629 15.5262C6.58326 15.8121 6.30598 15.9998 5.99902 15.9998C5.69206 15.9998 5.41479 15.8121 5.30176 15.5262L4.5 13.4988L2.47363 12.6971C2.1868 12.584 1.99902 12.3067 1.99902 11.9998C1.99908 11.6929 2.18779 11.4156 2.47363 11.3025L4.5 10.5008L5.30176 8.47441ZM13.0254 11.3416C13.1627 10.9341 13.8364 10.9342 13.9736 11.3416L14.3955 12.6053L15.6582 13.0262H15.6592C15.863 13.0942 16.0009 13.2849 16.001 13.4998C16.001 13.7148 15.8632 13.9064 15.6592 13.9744L14.3965 14.3953L13.9746 15.658C13.9056 15.8619 13.7149 15.9998 13.5 15.9998C13.2851 15.9998 13.0934 15.8619 13.0254 15.658L12.6045 14.3953L11.3408 13.9744C11.1368 13.9064 10.999 13.7148 10.999 13.4998C10.9991 13.2849 11.137 13.0942 11.3408 13.0262L12.6045 12.6053L13.0254 11.3416ZM11.3018 2.47441C11.5288 1.90241 12.4703 1.90241 12.6973 2.47441L13.499 4.50077L15.5254 5.30253C15.8122 5.41556 15.999 5.69292 15.999 5.9998C15.999 6.30669 15.8103 6.58399 15.5244 6.69706L13.498 7.49882L12.6963 9.52616C12.5833 9.8121 12.306 9.9998 11.999 9.9998C11.6921 9.9998 11.4148 9.8121 11.3018 9.52616L10.5 7.49882L8.47363 6.69706C8.1868 6.58399 7.99902 6.30669 7.99902 5.9998C7.99908 5.69292 8.18779 5.41557 8.47363 5.30253L10.5 4.50077L11.3018 2.47441ZM4.02734 2.34159C4.16461 1.93415 4.83831 1.93415 4.97559 2.34159L5.39746 3.60527L6.66016 4.02616C6.86399 4.09422 7.0019 4.28493 7.00195 4.4998C7.00195 4.71479 6.86415 4.9064 6.66016 4.97441L5.39746 5.39531L4.97559 6.658C4.90653 6.8619 4.71591 6.9998 4.50098 6.9998C4.28604 6.9998 4.09442 6.8619 4.02637 6.658L3.60449 5.39531L2.3418 4.97441C2.13781 4.9064 2.00098 4.71479 2.00098 4.4998C2.00103 4.28494 2.13895 4.09422 2.34277 4.02616L3.60645 3.60527L4.02734 2.34159Z"
      fill="currentColor"
      fillOpacity="0.8"
    />
  </svg>
);

const LogoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M11.25 3V4.5H14.5V13.5H11.25V15H14.75C15.44 15 16 14.44 16 13.75V4.25C16 3.56 15.44 3 14.75 3H11.25ZM7.97 5.47L6.91 6.53L8.63 8.25H2V9.75H8.63L6.91 11.47L7.97 12.53L11.5 9L7.97 5.47Z"
      fill="currentColor"
      fillOpacity="0.8"
    />
  </svg>
);

const LogoIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="24"
    viewBox="0 0 18 24"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.6183 0L0.600098 11.9049L17.6183 24V13.0064L13.7985 10.545L11.6487 12L15.2263 14.3273V19.3114L4.80132 11.9049L17.6183 2.94899V0Z"
      fill="url(#paint0_linear_15406_151)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.6183 3.87683L6.22632 11.9115L14.4144 17.723V14.7166L10.28 12.0324L17.6183 6.85734V3.87683Z"
      fill="url(#paint1_linear_15406_151)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_15406_151"
        x1="19.3201"
        y1="5.95"
        x2="7.17212"
        y2="20.1628"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#105EFF" />
        <stop offset="0.413357" stopColor="#009BFF" />
        <stop offset="0.735652" stopColor="#105EFF" />
        <stop offset="1" stopColor="#090E43" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_15406_151"
        x1="7.99722"
        y1="15.9999"
        x2="19.0092"
        y2="4.215"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#105EFF" />
        <stop offset="0.413357" stopColor="#009BFF" />
        <stop offset="0.735652" stopColor="#105EFF" />
        <stop offset="1" stopColor="#090E43" />
      </linearGradient>
    </defs>
  </svg>
);

export const SideNav: FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const animationId = useId();

  const onLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  const isDashboard = location.pathname === '/';

  return (
    <NavigationBar
      className="h-full w-auto shrink-0"
      classNameStart="flex justify-center"
      start={<LogoIcon className="size-8" />}
      end={
        <div className="flex flex-col gap-2 items-center">
          {user && <Avatar name={user.name} size={32} rounded />}
          <NavigationButton
            animationLayoutId={animationId}
            onClick={onLogout}
          >
            <LogoutIcon />
          </NavigationButton>
        </div>
      }
    >
      <NavigationButton
        animationLayoutId={animationId}
        active={isDashboard}
        onClick={() => navigate('/')}
      >
        <DashboardIcon />
      </NavigationButton>
    </NavigationBar>
  );
};
