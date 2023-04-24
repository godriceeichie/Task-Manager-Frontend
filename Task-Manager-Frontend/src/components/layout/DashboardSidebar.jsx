import React from 'react'
import { Link } from 'react-router-dom'

function DashboardSidebar() {
  return (
    <aside className='dashboardSidebar'>
        <header className='dashboardSidebar__header'>
          <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.5" y="4" width="35" height="35" fill="white" stroke="#3E54AC" stroke-width="7"/>
          </svg>
          <h1>
            <Link to={'/'}>Slick</Link>
          </h1>
        </header>
        <nav>
          <ul className='dashboardSidebar__links-container'>
            <div className="dashboardSidebar__main-container">
              <li>
                <Link>
                  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.83331" y="6.66663" width="10.25" height="10" rx="1" stroke="#888888" stroke-width="3" stroke-linejoin="round"/>
                    <rect x="6.83331" y="23.3334" width="10.25" height="10" rx="1" stroke="#888888" stroke-width="3" stroke-linejoin="round"/>
                    <rect x="23.9167" y="23.3334" width="10.25" height="10" rx="1" stroke="#888888" stroke-width="3" stroke-linejoin="round"/>
                    <rect x="23.9167" y="6.66663" width="10.25" height="10" rx="1" stroke="#888888" stroke-width="3" stroke-linejoin="round"/>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link>
                  <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.09515 10.4668L15.4929 17.7859L27.8065 10.5097" stroke="#888888" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.493 30.7626V17.7715" stroke="#888888" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.5866 3.36256L5.08891 7.6166C3.39 8.57625 2 10.9825 2 12.9591V21.0517C2 23.0283 3.39 25.4346 5.08891 26.3943L12.5866 30.6483C14.1872 31.5506 16.8128 31.5506 18.4134 30.6483L25.9111 26.3943C27.61 25.4346 29 23.0283 29 21.0517V12.9591C29 10.9825 27.61 8.57625 25.9111 7.6166L18.4134 3.36256C16.7987 2.44588 14.1872 2.44588 12.5866 3.36256Z" stroke="#888888" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.5133 18.7743V13.532L9.18878 5.68286" stroke="#888888" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Projects
                </Link>
              </li>
              <li>
                <Link>
                  <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.6474 13.6362H18.1009C17.4334 13.6362 16.8799 13.0827 16.8799 12.4153C16.8799 11.7478 17.4334 11.1943 18.1009 11.1943H26.6474C27.3148 11.1943 27.8683 11.7478 27.8683 12.4153C27.8683 13.0827 27.3311 13.6362 26.6474 13.6362Z" fill="#888888"/>
                    <path d="M9.55675 14.8729C9.24745 14.8729 8.93814 14.7589 8.69396 14.5147L7.47303 13.2938C7.00093 12.8218 7.00093 12.0404 7.47303 11.5683C7.94512 11.0962 8.72652 11.0962 9.19861 11.5683L9.55675 11.9264L12.3567 9.12641C12.8288 8.65432 13.6102 8.65432 14.0823 9.12641C14.5543 9.5985 14.5543 10.3799 14.0823 10.852L10.4195 14.5147C10.1916 14.7427 9.88233 14.8729 9.55675 14.8729Z" fill="#888888"/>
                    <path d="M26.6474 25.0315H18.1009C17.4334 25.0315 16.8799 24.478 16.8799 23.8105C16.8799 23.1431 17.4334 22.5896 18.1009 22.5896H26.6474C27.3148 22.5896 27.8683 23.1431 27.8683 23.8105C27.8683 24.478 27.3311 25.0315 26.6474 25.0315Z" fill="#888888"/>
                    <path d="M9.55675 26.2682C9.24745 26.2682 8.93814 26.1542 8.69396 25.91L7.47303 24.6891C7.00093 24.217 7.00093 23.4356 7.47303 22.9635C7.94512 22.4914 8.72652 22.4914 9.19861 22.9635L9.55675 23.3217L12.3567 20.5217C12.8288 20.0496 13.6102 20.0496 14.0823 20.5217C14.5543 20.9938 14.5543 21.7752 14.0823 22.2473L10.4195 25.91C10.1916 26.138 9.88233 26.2682 9.55675 26.2682Z" fill="#888888"/>
                    <path d="M22.3837 35.0104H12.6163C3.77674 35.0104 0 31.2336 0 22.3941V12.6267C0 3.78712 3.77674 0.010376 12.6163 0.010376H22.3837C31.2233 0.010376 35 3.78712 35 12.6267V22.3941C35 31.2336 31.2233 35.0104 22.3837 35.0104ZM12.6163 2.45224C5.11163 2.45224 2.44186 5.122 2.44186 12.6267V22.3941C2.44186 29.8987 5.11163 32.5685 12.6163 32.5685H22.3837C29.8884 32.5685 32.5581 29.8987 32.5581 22.3941V12.6267C32.5581 5.122 29.8884 2.45224 22.3837 2.45224H12.6163Z" fill="#888888"/>
                  </svg>
                  Tasks
                </Link>
              </li>
              <li>
                <Link>
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.75" y="9.5" width="28.5" height="23.75" rx="2" stroke="#888888" stroke-width="2"/>
                    <path d="M4.75 13.5C4.75 11.6144 4.75 10.6716 5.33579 10.0858C5.92157 9.5 6.86438 9.5 8.75 9.5H29.25C31.1356 9.5 32.0784 9.5 32.6642 10.0858C33.25 10.6716 33.25 11.6144 33.25 13.5V15.8333H4.75V13.5Z" fill="#888888"/>
                    <path d="M11.0833 4.75L11.0833 9.5" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                    <path d="M26.9167 4.75L26.9167 9.5" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                    <rect x="11.0833" y="19" width="6.33333" height="3.16667" rx="0.5" fill="#888888"/>
                    <rect x="11.0833" y="25.3334" width="6.33333" height="3.16667" rx="0.5" fill="#888888"/>
                    <rect x="20.5833" y="19" width="6.33333" height="3.16667" rx="0.5" fill="#888888"/>
                    <rect x="20.5833" y="25.3334" width="6.33333" height="3.16667" rx="0.5" fill="#888888"/>
                  </svg>
                  Calendar
                </Link>
              </li>
              <li>
                <Link>
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.83331 20.5C6.83331 16.15 6.83331 13.975 7.56937 12.2687C8.47891 10.1601 10.16 8.47897 12.2686 7.56943C13.975 6.83337 16.15 6.83337 20.5 6.83337V6.83337C24.85 6.83337 27.025 6.83337 28.7314 7.56943C30.8399 8.47897 32.5211 10.1601 33.4306 12.2687C34.1666 13.975 34.1666 16.15 34.1666 20.5V30.1667C34.1666 32.0523 34.1666 32.9951 33.5809 33.5809C32.9951 34.1667 32.0523 34.1667 30.1666 34.1667H20.5C16.15 34.1667 13.975 34.1667 12.2686 33.4307C10.16 32.5211 8.47891 30.84 7.56937 28.7314C6.83331 27.0251 6.83331 24.8501 6.83331 20.5V20.5Z" stroke="#888888" stroke-width="3"/>
                    <path d="M15.375 18.7916L25.625 18.7916" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.5 25.625H25.625" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Messages
                </Link>
              </li>
            </div>
            <div className='dashboardSidebar__minor-container'>
              <li>
                <Link>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.0968 5.21768H23.5968V5.24262L23.5993 5.26743L24.0968 5.21768ZM24.0968 5.21766H24.5968V5.19272L24.5943 5.16791L24.0968 5.21766ZM24.2574 6.82348L24.7549 6.77373V6.77373L24.2574 6.82348ZM27.5139 8.17238L27.8305 8.55936L27.5139 8.17238ZM28.7629 7.15049L29.0795 7.53746L28.7629 7.15049ZM30.1464 6.35261L30.1713 5.85323L30.1464 6.35261ZM33.7158 9.55639L33.3622 9.90994V9.90994L33.7158 9.55639ZM34.6474 10.8536L35.1468 10.8287L35.1468 10.8287L34.6474 10.8536ZM33.8495 12.2371L33.4625 11.9205L33.8495 12.2371ZM32.8276 13.4861L33.2145 13.8027V13.8027L32.8276 13.4861ZM34.1765 16.7427L34.1267 17.2402L34.1765 16.7427ZM35.7824 16.9033L35.8321 16.4057L35.7824 16.9033ZM37.3248 17.3173L36.9541 17.6528V17.6528L37.3248 17.3173ZM37.3248 23.6827L36.9541 23.3472V23.3472L37.3248 23.6827ZM35.7824 24.0968L35.8321 24.5943L35.7824 24.0968ZM34.1771 24.2573L34.1274 23.7598H34.1274L34.1771 24.2573ZM32.8282 27.5139L32.4412 27.8305L32.8282 27.5139ZM33.8496 28.7622L34.2366 28.4456L33.8496 28.7622ZM34.6474 30.1457L35.1468 30.1706L35.1468 30.1706L34.6474 30.1457ZM33.7159 31.4429L34.0694 31.7964L33.7159 31.4429ZM30.1465 34.6467L30.1714 35.1461H30.1714L30.1465 34.6467ZM28.763 33.8488L29.0796 33.4618L29.0796 33.4618L28.763 33.8488ZM27.514 32.8269L27.1974 33.2139H27.1974L27.514 32.8269ZM24.2574 34.1758L23.7599 34.1261L24.2574 34.1758ZM24.0968 35.7824L24.5943 35.8321V35.8321L24.0968 35.7824ZM23.6827 37.3248L23.3472 36.9541L23.3472 36.9541L23.6827 37.3248ZM17.3173 37.3248L17.6528 36.9541L17.6528 36.9541L17.3173 37.3248ZM16.9033 35.7824L16.4057 35.8321V35.8321L16.9033 35.7824ZM16.7427 34.1765L17.2402 34.1267V34.1267L16.7427 34.1765ZM13.4861 32.8276L13.8027 33.2146L13.4861 32.8276ZM12.237 33.8496L12.5536 34.2366H12.5536L12.237 33.8496ZM10.8535 34.6474L10.8286 35.1468H10.8286L10.8535 34.6474ZM9.55632 33.7159L9.90987 33.3623L9.55632 33.7159ZM7.28411 31.4437L7.63766 31.0901H7.63766L7.28411 31.4437ZM6.35254 30.1465L6.85192 30.1215L6.35254 30.1465ZM7.15041 28.763L7.53739 29.0796H7.53739L7.15041 28.763ZM8.17237 27.5139L7.78539 27.1973H7.78539L8.17237 27.5139ZM6.82346 24.2574L6.87322 23.7598H6.87322L6.82346 24.2574ZM5.21768 24.0968L5.26743 23.5993L5.24262 23.5968H5.21768V24.0968ZM5.21766 24.0968L5.16791 24.5943L5.19272 24.5968H5.21766V24.0968ZM3.67523 23.6827L4.04596 23.3472H4.04596L3.67523 23.6827ZM3.41669 22.1067H2.91669H3.41669ZM3.41669 18.8933H3.91669H3.41669ZM3.67523 17.3173L3.30451 16.9818L3.30451 16.9818L3.67523 17.3173ZM5.21768 16.9033L5.16793 16.4057L5.21768 16.9033ZM6.82411 16.7426L6.77435 16.2451H6.77435L6.82411 16.7426ZM8.17301 13.4861L7.78604 13.8027H7.78604L8.17301 13.4861ZM7.15049 12.2363L7.53747 11.9197H7.53747L7.15049 12.2363ZM6.35261 10.8528L6.85199 10.8777V10.8777L6.35261 10.8528ZM7.28419 9.55562L7.63774 9.90917L7.63774 9.90917L7.28419 9.55562ZM9.5564 7.28341L9.20284 6.92986L9.20284 6.92986L9.5564 7.28341ZM10.8536 6.35184L10.8287 5.85246H10.8287L10.8536 6.35184ZM12.2371 7.14971L12.5537 6.76273L12.2371 7.14971ZM13.4862 8.17171L13.8028 7.78473L13.4862 8.17171ZM16.7427 6.8228L17.2403 6.87256V6.87256L16.7427 6.8228ZM16.9033 5.21768L16.4057 5.16793V5.16793L16.9033 5.21768ZM17.3173 3.67523L16.9818 3.30451L16.9818 3.30451L17.3173 3.67523ZM23.6827 3.67523L23.3472 4.04596V4.04596L23.6827 3.67523ZM24.5968 5.21768V5.21766H23.5968V5.21768H24.5968ZM24.7549 6.77373L24.5943 5.16793L23.5993 5.26743L23.7598 6.87323L24.7549 6.77373ZM25.2466 9.04082C25.1953 9.01959 25.0937 8.95968 24.9951 8.56784C24.8964 8.1753 24.8383 7.6074 24.7549 6.77373L23.7598 6.87323C23.8398 7.67309 23.9042 8.33035 24.0254 8.81181C24.1467 9.29399 24.3623 9.75695 24.8639 9.9647L25.2466 9.04082ZM27.1973 7.7854C26.5489 8.31595 26.1062 8.67641 25.7588 8.88416C25.412 9.09152 25.2978 9.06206 25.2466 9.04082L24.8639 9.9647C25.3654 10.1725 25.8453 9.99759 26.272 9.74241C26.6981 9.48761 27.2084 9.06839 27.8305 8.55936L27.1973 7.7854ZM28.4463 6.76351L27.1973 7.7854L27.8305 8.55936L29.0795 7.53746L28.4463 6.76351ZM30.1713 5.85323C29.8377 5.83659 29.5558 5.95348 29.2954 6.11581C29.0472 6.27059 28.7688 6.49962 28.4463 6.76351L29.0795 7.53746C29.4227 7.25664 29.6437 7.07714 29.8245 6.96436C29.9933 6.85913 30.0702 6.84943 30.1215 6.85199L30.1713 5.85323ZM31.7971 6.93063C31.5025 6.63596 31.2482 6.38036 31.0167 6.20166C30.7738 6.01423 30.5049 5.86987 30.1713 5.85323L30.1215 6.85199C30.1727 6.85455 30.2483 6.87185 30.4057 6.99335C30.5745 7.12356 30.7765 7.32416 31.09 7.63774L31.7971 6.93063ZM34.0693 9.20284L31.7971 6.93063L31.09 7.63774L33.3622 9.90994L34.0693 9.20284ZM35.1468 10.8287C35.1301 10.4951 34.9858 10.2262 34.7983 9.98332C34.6196 9.75173 34.364 9.49751 34.0693 9.20284L33.3622 9.90994C33.6758 10.2235 33.8764 10.4255 34.0066 10.5942C34.1281 10.7517 34.1454 10.8273 34.148 10.8785L35.1468 10.8287ZM34.2365 12.5537C34.5004 12.2312 34.7294 11.9528 34.8842 11.7046C35.0465 11.4442 35.1634 11.1623 35.1468 10.8287L34.148 10.8785C34.1505 10.9298 34.1409 11.0067 34.0356 11.1754C33.9228 11.3563 33.7433 11.5772 33.4625 11.9205L34.2365 12.5537ZM33.2145 13.8027L34.2365 12.5537L33.4625 11.9205L32.4406 13.1695L33.2145 13.8027ZM31.9591 15.7535C31.9379 15.7022 31.9084 15.588 32.1158 15.2412C32.3235 14.8938 32.684 14.4512 33.2145 13.8027L32.4406 13.1695C31.9316 13.7916 31.5123 14.3019 31.2575 14.728C31.0024 15.1547 30.8275 15.6346 31.0352 16.1362L31.9591 15.7535ZM34.2262 16.2451C33.3925 16.1618 32.8246 16.1037 32.4321 16.0049C32.0403 15.9063 31.9804 15.8047 31.9591 15.7535L31.0352 16.1362C31.243 16.6377 31.706 16.8534 32.1881 16.9747C32.6696 17.0958 33.3268 17.1602 34.1267 17.2402L34.2262 16.2451ZM35.8321 16.4057L34.2262 16.2451L34.1267 17.2402L35.7326 17.4008L35.8321 16.4057ZM37.6955 16.9818C37.4714 16.7342 37.1894 16.6175 36.8905 16.5482C36.6056 16.4821 36.2468 16.4472 35.8321 16.4057L35.7326 17.4008C36.1739 17.4449 36.457 17.4742 36.6647 17.5223C36.8584 17.5673 36.9197 17.6148 36.9541 17.6528L37.6955 16.9818ZM38.0834 18.8933C38.0834 18.4766 38.0843 18.1161 38.0469 17.826C38.0077 17.5217 37.9197 17.2295 37.6955 16.9818L36.9541 17.6528C36.9885 17.6909 37.0297 17.7566 37.0551 17.9538C37.0824 18.1652 37.0834 18.4499 37.0834 18.8933H38.0834ZM38.0834 22.1067V18.8933H37.0834V22.1067H38.0834ZM37.6955 24.0182C37.9197 23.7706 38.0077 23.4783 38.0469 23.1741C38.0843 22.8839 38.0834 22.5234 38.0834 22.1067H37.0834C37.0834 22.5502 37.0824 22.8348 37.0551 23.0462C37.0297 23.2435 36.9885 23.3092 36.9541 23.3472L37.6955 24.0182ZM35.8321 24.5943C36.2468 24.5528 36.6056 24.5179 36.8905 24.4519C37.1894 24.3826 37.4714 24.2659 37.6955 24.0182L36.9541 23.3472C36.9197 23.3852 36.8584 23.4328 36.6647 23.4777C36.457 23.5258 36.1739 23.5551 35.7326 23.5993L35.8321 24.5943ZM34.2269 24.7548L35.8321 24.5943L35.7326 23.5993L34.1274 23.7598L34.2269 24.7548ZM31.9598 25.2465C31.981 25.1952 32.0409 25.0937 32.4327 24.9951C32.8253 24.8963 33.3932 24.8382 34.2269 24.7548L34.1274 23.7598C33.3275 23.8398 32.6702 23.9042 32.1888 24.0253C31.7066 24.1466 31.2436 24.3623 31.0359 24.8638L31.9598 25.2465ZM33.2152 27.1972C32.6846 26.5488 32.3242 26.1061 32.1164 25.7587C31.9091 25.412 31.9385 25.2978 31.9598 25.2465L31.0359 24.8638C30.8281 25.3654 31.003 25.8452 31.2582 26.272C31.513 26.6981 31.9322 27.2083 32.4412 27.8305L33.2152 27.1972ZM34.2366 28.4456L33.2152 27.1972L32.4412 27.8305L33.4626 29.0788L34.2366 28.4456ZM35.1468 30.1706C35.1635 29.837 35.0466 29.5551 34.8843 29.2947C34.7295 29.0465 34.5004 28.7681 34.2366 28.4456L33.4626 29.0788C33.7434 29.422 33.9229 29.643 34.0357 29.8238C34.1409 29.9926 34.1506 30.0695 34.1481 30.1208L35.1468 30.1706ZM34.0694 31.7964C34.3641 31.5018 34.6197 31.2476 34.7984 31.016C34.9858 30.7731 35.1302 30.5042 35.1468 30.1706L34.1481 30.1208C34.1455 30.172 34.1282 30.2476 34.0067 30.405C33.8765 30.5738 33.6759 30.7758 33.3623 31.0893L34.0694 31.7964ZM31.7972 34.0686L34.0694 31.7964L33.3623 31.0893L31.0901 33.3615L31.7972 34.0686ZM30.1714 35.1461C30.505 35.1294 30.7739 34.9851 31.0167 34.7976C31.2483 34.6189 31.5026 34.3633 31.7972 34.0686L31.0901 33.3615C30.7765 33.6751 30.5746 33.8757 30.4058 34.0059C30.2484 34.1274 30.1728 34.1447 30.1215 34.1473L30.1714 35.1461ZM28.4464 34.2358C28.7689 34.4997 29.0473 34.7287 29.2955 34.8835C29.5558 35.0458 29.8378 35.1627 30.1714 35.1461L30.1216 34.1473C30.0703 34.1498 29.9934 34.1402 29.8246 34.0349C29.6438 33.9221 29.4228 33.7426 29.0796 33.4618L28.4464 34.2358ZM27.1974 33.2139L28.4464 34.2358L29.0796 33.4618L27.8306 32.4399L27.1974 33.2139ZM25.2466 31.9585C25.2979 31.9372 25.4121 31.9078 25.7589 32.1151C26.1063 32.3229 26.5489 32.6833 27.1974 33.2139L27.8306 32.4399C27.2085 31.9309 26.6982 31.5117 26.2721 31.2569C25.8454 31.0017 25.3655 30.8268 24.8639 31.0346L25.2466 31.9585ZM24.755 34.2256C24.8383 33.3919 24.8965 32.824 24.9952 32.4314C25.0938 32.0396 25.1954 31.9797 25.2466 31.9585L24.8639 31.0346C24.3624 31.2423 24.1467 31.7053 24.0254 32.1875C23.9043 32.6689 23.8399 33.3262 23.7599 34.1261L24.755 34.2256ZM24.5943 35.8321L24.755 34.2256L23.7599 34.1261L23.5993 35.7326L24.5943 35.8321ZM24.0182 37.6955C24.2659 37.4714 24.3826 37.1894 24.4519 36.8905C24.5179 36.6056 24.5528 36.2468 24.5943 35.8321L23.5993 35.7326C23.5551 36.1739 23.5259 36.457 23.4777 36.6647C23.4328 36.8584 23.3852 36.9197 23.3472 36.9541L24.0182 37.6955ZM22.1067 38.0834C22.5234 38.0834 22.8839 38.0843 23.1741 38.0469C23.4783 38.0077 23.7706 37.9197 24.0182 37.6955L23.3472 36.9541C23.3092 36.9885 23.2435 37.0297 23.0462 37.0551C22.8348 37.0824 22.5502 37.0834 22.1067 37.0834V38.0834ZM18.8933 38.0834H22.1067V37.0834H18.8933V38.0834ZM16.9818 37.6955C17.2295 37.9197 17.5217 38.0077 17.826 38.0469C18.1161 38.0843 18.4766 38.0834 18.8933 38.0834V37.0834C18.4499 37.0834 18.1652 37.0824 17.9538 37.0551C17.7566 37.0297 17.6909 36.9885 17.6528 36.9541L16.9818 37.6955ZM16.4057 35.8321C16.4472 36.2468 16.4821 36.6056 16.5482 36.8905C16.6175 37.1894 16.7342 37.4714 16.9818 37.6955L17.6528 36.9541C17.6148 36.9197 17.5673 36.8584 17.5223 36.6647C17.4742 36.457 17.4449 36.1739 17.4008 35.7326L16.4057 35.8321ZM16.2452 34.2262L16.4057 35.8321L17.4008 35.7326L17.2402 34.1267L16.2452 34.2262ZM15.7535 31.9591C15.8047 31.9804 15.9063 32.0403 16.0049 32.4321C16.1037 32.8247 16.1618 33.3926 16.2452 34.2262L17.2402 34.1267C17.1602 33.3269 17.0958 32.6696 16.9747 32.1881C16.8534 31.706 16.6377 31.243 16.1362 31.0352L15.7535 31.9591ZM13.8027 33.2146C14.4512 32.684 14.8938 32.3235 15.2413 32.1158C15.588 31.9084 15.7022 31.9379 15.7535 31.9591L16.1362 31.0352C15.6346 30.8275 15.1548 31.0024 14.728 31.2575C14.3019 31.5123 13.7916 31.9316 13.1695 32.4406L13.8027 33.2146ZM12.5536 34.2366L13.8027 33.2146L13.1695 32.4406L11.9204 33.4626L12.5536 34.2366ZM10.8286 35.1468C11.1622 35.1635 11.4441 35.0466 11.7045 34.8843C11.9527 34.7295 12.2311 34.5004 12.5536 34.2366L11.9204 33.4626C11.5772 33.7434 11.3562 33.9229 11.1754 34.0357C11.0066 34.1409 10.9297 34.1506 10.8784 34.1481L10.8286 35.1468ZM9.20276 34.0694C9.49744 34.3641 9.75166 34.6197 9.98324 34.7984C10.2261 34.9858 10.495 35.1302 10.8286 35.1468L10.8784 34.1481C10.8272 34.1455 10.7516 34.1282 10.5942 34.0067C10.4254 33.8765 10.2234 33.6759 9.90987 33.3623L9.20276 34.0694ZM6.93056 31.7972L9.20276 34.0694L9.90987 33.3623L7.63766 31.0901L6.93056 31.7972ZM5.85316 30.1714C5.86979 30.5049 6.01415 30.7738 6.20158 31.0167C6.38029 31.2483 6.63588 31.5025 6.93056 31.7972L7.63766 31.0901C7.32409 30.7765 7.12349 30.5746 6.99327 30.4058C6.87177 30.2484 6.85447 30.1728 6.85192 30.1215L5.85316 30.1714ZM6.76343 28.4464C6.49954 28.7689 6.27051 29.0473 6.11573 29.2955C5.9534 29.5558 5.83652 29.8378 5.85316 30.1714L6.85192 30.1215C6.84936 30.0703 6.85906 29.9934 6.96428 29.8246C7.07706 29.6437 7.25657 29.4228 7.53739 29.0796L6.76343 28.4464ZM7.78539 27.1973L6.76343 28.4464L7.53739 29.0796L8.55935 27.8305L7.78539 27.1973ZM9.04081 25.2466C9.06205 25.2978 9.09151 25.412 8.88414 25.7588C8.6764 26.1062 8.31594 26.5488 7.78539 27.1973L8.55935 27.8305C9.06838 27.2084 9.4876 26.6981 9.7424 26.272C9.99757 25.8453 10.1724 25.3654 9.96469 24.8639L9.04081 25.2466ZM6.77371 24.7549C7.60738 24.8382 8.17528 24.8964 8.56783 24.9951C8.95967 25.0937 9.01958 25.1953 9.04081 25.2466L9.96469 24.8639C9.75694 24.3623 9.29398 24.1467 8.8118 24.0253C8.33033 23.9042 7.67308 23.8398 6.87322 23.7598L6.77371 24.7549ZM5.16793 24.5943L6.77371 24.7549L6.87322 23.7598L5.26743 23.5993L5.16793 24.5943ZM5.21766 24.5968H5.21768V23.5968H5.21766V24.5968ZM3.30451 24.0182C3.52862 24.2659 3.81063 24.3826 4.10949 24.4519C4.39445 24.5179 4.75325 24.5528 5.16791 24.5943L5.26741 23.5993C4.82615 23.5551 4.54301 23.5258 4.33537 23.4777C4.14164 23.4328 4.08039 23.3852 4.04596 23.3472L3.30451 24.0182ZM2.91669 22.1067C2.91669 22.5234 2.91572 22.8839 2.95311 23.1741C2.99232 23.4783 3.08039 23.7706 3.30451 24.0182L4.04596 23.3472C4.01153 23.3092 3.97032 23.2435 3.9449 23.0462C3.91766 22.8348 3.91669 22.5502 3.91669 22.1067H2.91669ZM2.91669 18.8933L2.91669 22.1067H3.91669L3.91669 18.8933H2.91669ZM3.30451 16.9818C3.08039 17.2295 2.99232 17.5217 2.95311 17.826C2.91572 18.1161 2.91669 18.4766 2.91669 18.8933H3.91669C3.91669 18.4499 3.91766 18.1652 3.9449 17.9538C3.97033 17.7566 4.01153 17.6909 4.04596 17.6528L3.30451 16.9818ZM5.16793 16.4057C4.75326 16.4472 4.39446 16.4821 4.1095 16.5482C3.81063 16.6175 3.52863 16.7342 3.30451 16.9818L4.04596 17.6528C4.08039 17.6148 4.14164 17.5673 4.33538 17.5223C4.54302 17.4742 4.82616 17.4449 5.26743 17.4008L5.16793 16.4057ZM6.77435 16.2451L5.16793 16.4057L5.26743 17.4008L6.87386 17.2401L6.77435 16.2451ZM9.04146 15.7534C9.02022 15.8047 8.96031 15.9063 8.56847 16.0048C8.17593 16.1036 7.60803 16.1617 6.77435 16.2451L6.87386 17.2401C7.67372 17.1601 8.33098 17.0958 8.81245 16.9746C9.29462 16.8533 9.75759 16.6377 9.96534 16.1361L9.04146 15.7534ZM7.78604 13.8027C8.31658 14.4511 8.67705 14.8938 8.88479 15.2412C9.09216 15.588 9.06269 15.7022 9.04146 15.7534L9.96534 16.1361C10.1731 15.6346 9.99822 15.1547 9.74304 14.728C9.48824 14.3019 9.06903 13.7916 8.55999 13.1694L7.78604 13.8027ZM6.76351 12.5529L7.78604 13.8027L8.55999 13.1694L7.53747 11.9197L6.76351 12.5529ZM5.85324 10.8279C5.8366 11.1615 5.95348 11.4434 6.11581 11.7038C6.27059 11.952 6.49962 12.2304 6.76351 12.5529L7.53747 11.9197C7.25665 11.5765 7.07714 11.3555 6.96436 11.1747C6.85913 11.0059 6.84944 10.929 6.85199 10.8777L5.85324 10.8279ZM6.93063 9.20207C6.63596 9.49674 6.38037 9.75096 6.20166 9.98255C6.01423 10.2254 5.86987 10.4943 5.85324 10.8279L6.85199 10.8777C6.85455 10.8265 6.87185 10.7509 6.99335 10.5935C7.12357 10.4247 7.32416 10.2228 7.63774 9.90917L6.93063 9.20207ZM6.93064 9.20206L6.93063 9.20207L7.63774 9.90917L7.63774 9.90917L6.93064 9.20206ZM9.20284 6.92986L6.93064 9.20206L7.63774 9.90917L9.90995 7.63697L9.20284 6.92986ZM9.20284 6.92986L9.20284 6.92986L9.90995 7.63697L9.90995 7.63696L9.20284 6.92986ZM10.8287 5.85246C10.4951 5.8691 10.2262 6.01345 9.98332 6.20088C9.75174 6.37959 9.49752 6.63518 9.20284 6.92986L9.90995 7.63696C10.2235 7.32338 10.4255 7.12279 10.5942 6.99257C10.7517 6.87108 10.8273 6.85377 10.8785 6.85122L10.8287 5.85246ZM12.5537 6.76273C12.2312 6.49884 11.9528 6.26981 11.7046 6.11503C11.4442 5.9527 11.1623 5.83582 10.8287 5.85246L10.8785 6.85122C10.9298 6.84866 11.0067 6.85836 11.1754 6.96358C11.3563 7.07636 11.5772 7.25587 11.9205 7.53669L12.5537 6.76273ZM13.8028 7.78473L12.5537 6.76273L11.9205 7.53669L13.1696 8.55869L13.8028 7.78473ZM15.7536 9.04015C15.7023 9.06139 15.5881 9.09085 15.2413 8.88348C14.8939 8.67574 14.4513 8.31528 13.8028 7.78473L13.1696 8.55869C13.7917 9.06772 14.302 9.48694 14.7281 9.74174C15.1548 9.99691 15.6347 10.1718 16.1362 9.96403L15.7536 9.04015ZM16.2452 6.77305C16.1619 7.60672 16.1037 8.17462 16.005 8.56717C15.9064 8.95901 15.8048 9.01892 15.7536 9.04015L16.1362 9.96403C16.6378 9.75628 16.8535 9.29332 16.9748 8.81114C17.0959 8.32967 17.1603 7.67242 17.2403 6.87256L16.2452 6.77305ZM16.4057 5.16793L16.2452 6.77305L17.2403 6.87256L17.4008 5.26743L16.4057 5.16793ZM16.9818 3.30451C16.7342 3.52863 16.6175 3.81063 16.5482 4.1095C16.4821 4.39446 16.4472 4.75326 16.4057 5.16793L17.4008 5.26743C17.4449 4.82617 17.4742 4.54302 17.5223 4.33538C17.5673 4.14164 17.6148 4.08039 17.6528 4.04596L16.9818 3.30451ZM18.8933 2.91669C18.4766 2.91669 18.1161 2.91572 17.826 2.95311C17.5217 2.99232 17.2295 3.08039 16.9818 3.30451L17.6528 4.04596C17.6909 4.01153 17.7566 3.97032 17.9538 3.9449C18.1652 3.91766 18.4499 3.91669 18.8933 3.91669V2.91669ZM22.1067 2.91669H18.8933V3.91669H22.1067V2.91669ZM24.0182 3.30451C23.7706 3.08039 23.4783 2.99232 23.1741 2.95311C22.8839 2.91572 22.5234 2.91669 22.1067 2.91669V3.91669C22.5502 3.91669 22.8348 3.91766 23.0462 3.9449C23.2435 3.97032 23.3092 4.01153 23.3472 4.04596L24.0182 3.30451ZM24.5943 5.16791C24.5528 4.75325 24.5179 4.39445 24.4519 4.10949C24.3826 3.81063 24.2659 3.52862 24.0182 3.30451L23.3472 4.04596C23.3852 4.08039 23.4328 4.14164 23.4777 4.33537C23.5259 4.54301 23.5551 4.82615 23.5993 5.26741L24.5943 5.16791ZM26.8334 20.5C26.8334 23.9978 23.9978 26.8334 20.5 26.8334V27.8334C24.5501 27.8334 27.8334 24.5501 27.8334 20.5H26.8334ZM20.5 14.1667C23.9978 14.1667 26.8334 17.0022 26.8334 20.5H27.8334C27.8334 16.4499 24.5501 13.1667 20.5 13.1667V14.1667ZM14.1667 20.5C14.1667 17.0022 17.0022 14.1667 20.5 14.1667V13.1667C16.4499 13.1667 13.1667 16.4499 13.1667 20.5H14.1667ZM20.5 26.8334C17.0022 26.8334 14.1667 23.9978 14.1667 20.5H13.1667C13.1667 24.5501 16.4499 27.8334 20.5 27.8334V26.8334Z" fill="#222222" />
                </svg>
                  Settings
                </Link>
              </li>
              <li>
                <Link>
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.41669 20.5L2.63582 19.8753L2.13606 20.5L2.63582 21.1247L3.41669 20.5ZM18.7917 21.5C19.344 21.5 19.7917 21.0523 19.7917 20.5C19.7917 19.9477 19.344 19.5 18.7917 19.5V21.5ZM9.46915 11.3336L2.63582 19.8753L4.19756 21.1247L11.0309 12.583L9.46915 11.3336ZM2.63582 21.1247L9.46915 29.6663L11.0309 28.417L4.19756 19.8753L2.63582 21.1247ZM3.41669 21.5H18.7917V19.5H3.41669V21.5Z" fill="#888888"/>
                  <path d="M17.0833 13.8921V10.2219C17.0833 8.60352 17.0833 7.79435 17.5573 7.23486C18.0312 6.67537 18.8294 6.54234 20.4257 6.27629L30.5969 4.58109C33.84 4.04057 35.4616 3.77031 36.5224 4.66901C37.5833 5.5677 37.5833 7.21162 37.5833 10.4994V30.5006C37.5833 33.7884 37.5833 35.4323 36.5224 36.331C35.4616 37.2297 33.84 36.9595 30.5969 36.419L20.4257 34.7238C18.8294 34.4577 18.0312 34.3247 17.5573 33.7652C17.0833 33.2057 17.0833 32.3965 17.0833 30.7782V27.446" stroke="#888888" stroke-width="2"/>
                  </svg>
                  Log out
                </Link>
              </li>
            </div>
          </ul>
        </nav>
    </aside>
  )
}

export default DashboardSidebar