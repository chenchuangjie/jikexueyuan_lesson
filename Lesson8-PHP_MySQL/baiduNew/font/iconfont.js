;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiangzuo" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M238.0154 456.5575l382.9551 412.5203h176.68844945769544l-382.9551-412.5203 382.9551-382.9404H620.9704418285552L238.0154 456.5575zM238.0154 456.5575"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M83.617 654.65c-26.262 26.265-26.262 68.847 0.003 95.112 26.258 26.265 68.847 26.265 95.112 0l292.187-292.19c11.76-9.185 26.285-14.298 41.362-14.298 15.078 0 29.604 5.116 41.366 14.301l291.626 291.627c26.265 26.265 68.847 26.265 95.112 0 26.266-26.265 26.266-68.847 0-95.112l-380.548-380.548c-12.612-12.613-29.718-19.697-47.556-19.697-17.839 0-34.944 7.084-47.558 19.696l-381.107 381.108z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-camera" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M907.2128 289.5872l-179.2 0-51.2-104.2176 0 1.8176-307.2 0-51.2 102.4-179.2 0c-25.6 0-76.8 49.3824-76.8 99.7632l0 410.3936c0 42.3936 43.7504 104.2176 76.8 104.2176l768 0c33.5872 0 76.8-63.4368 76.8-103.424L984.0128 390.1696C984.0128 364.5696 958.4128 289.5872 907.2128 289.5872zM932.8128 800.5632c0 10.112-17.9712 51.6608-25.6 52.224l-768 0c-5.9136-0.4864-25.6-39.4496-25.6-53.0176L113.6128 389.376c0-16.2304 47.4112-48.1792 51.2-48.5632l153.6 0 18.7392-1.8176 14.9248-24.8832 43.136-75.6992 256 0 44.0064 75.7248 14.08 24.8576 44.3136 1.8176 153.6 0c18.048 0 25.344 47.36 25.6 49.3824L932.8128 800.5632zM523.2128 390.1696c-98.944 0-179.2 80.2304-179.2 179.2s80.256 179.2 179.2 179.2c98.9696 0 179.2-80.2304 179.2-179.2S622.1824 390.1696 523.2128 390.1696zM523.2128 697.3696c-70.5792 0-128-57.4208-128-128s57.4208-128 128-128 128 57.4208 128 128S593.7664 697.3696 523.2128 697.3696z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-config" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M977.011826 425.716868l-2.12643-13.954827-98.520851-25.901926c-4.247744-1.735527-30.27656-13.135158-38.412868-34.114982-4.835122-12.465916-2.836605-26.780947 6.109138-43.748387l50.01409-83.445504-9.105379-11.627828c-26.136264-33.375132-56.730049-62.968124-90.933035-87.959308l-12.71151-9.28855-73.040527 53.648874c-3.378957 1.88186-19.635199 10.395768-37.182854 10.396791-12.45159 0-30.495548-3.560082-43.671639-34.261315L589.356832 41.370223l-13.193487-1.500167c-17.253966-1.961678-34.855856-2.956332-52.313459-2.956332-21.399379 0-42.986023 1.50426-64.160275 4.470825l-14.669094 2.055822-23.644513 103.497189c-0.925069 2.535753-4.79112 12.411681-12.018731 22.040992-10.32516 13.756305-22.079878 20.444635-35.933397 20.446681-8.615215 0.001023-18.307971-2.588965-28.820396-7.699356l-95.9237-53.336766-11.264555 9.026584c-30.03506 24.066115-56.978712 51.836599-80.081896 82.540901l-9.290597 12.347213 57.656141 83.959204c2.249227 4.358261 14.46955 29.684066 6.728238 51.096748-4.52199 12.508895-15.363919 21.982664-33.137725 28.951379L69.493747 432.561763l-1.466398 13.785981c-1.723248 16.188704-2.596128 32.670074-2.596128 48.984644 0 25.362644 2.091638 50.816363 6.217608 75.653027l2.328022 14.018272 106.054431 25.698289c4.275373 1.650593 30.525224 12.545734 39.066761 33.365922 5.074575 12.368702 3.354398 26.718525-5.259794 43.853787l-51.462069 89.754187 9.599635 11.484565c25.116027 30.04734 53.992705 56.80475 85.826737 79.526241l10.671037 7.616468 85.839017-44.217061c2.959402-1.082658 14.990413-5.14416 28.758997-5.14416 25.140587 0 40.191374 13.163811 47.332005 41.422412l15.429411 79.027891 15.228843 2.085498c20.695345 2.835581 41.820478 4.273327 62.788022 4.273327 20.004613 0 40.179095-1.309832 59.963697-3.895727l13.500479-1.76418 33.679054-104.641245c2.408863-5.154393 19.064194-38.356586 47.861054-38.356586 9.550517 0 20.191878 3.473101 31.639604 10.323113l79.358419 53.624315 12.279674-9.392928c32.398898-24.785499 61.388139-53.788044 86.160335-86.204337l9.190313-12.024871-58.104349-89.727581c-2.127454-4.412496-13.663184-30.064736-5.342682-51.262524 4.858658-12.382005 15.953344-21.556968 33.909297-28.042683l110.106724-33.07428 1.531889-14.171768c1.781576-16.479323 2.685155-33.236985 2.685155-49.808406C982.267527 472.021473 980.499254 448.599018 977.011826 425.716868zM938.1354 526.426571l-83.087347 24.959461-1.025353 0.335644c-30.390147 10.81737-50.625004 28.777417-60.140729 53.378721-16.124236 41.683355 6.877641 85.564771 7.865131 87.412862l0.424672 0.796132 42.624796 65.822125c-17.047258 20.715811-36.056194 39.750329-56.748469 56.821123l-53.955866-36.4604-0.908696-0.580215c-18.422581-11.145851-36.7019-16.796548-54.331419-16.796548-59.81941 0-86.671988 62.682621-87.786369 65.351404l-0.347924 0.832971-25.900903 80.470753c-27.476795 2.688225-55.304583 2.65855-82.751702-0.078795l-9.590426-49.117674-0.233314-1.051959c-6.624884-26.727735-19.293415-46.732347-37.652552-59.458183-14.455223-10.019191-31.789007-15.099906-51.519374-15.099906-24.184819 0-43.624567 7.739265-45.76123 8.621355l-0.835018 0.344854-64.169485 33.054837c-20.809955-15.857153-40.110533-33.662681-57.611116-53.147454l36.707017-64.020082 0.511653-0.949628c14.623046-28.754904 16.959254-55.707766 6.948249-80.112596-16.96437-41.349757-63.841004-57.384965-65.828264-58.048067l-0.856507-0.284479-80.201623-19.434631c-2.366907-18.051121-3.563152-36.377512-3.563152-54.656831 0-10.217712 0.3776-20.507056 1.125637-30.729885l83.757612-27.652803 1.01512-0.363274c30.086226-11.637038 49.826825-30.138414 58.673307-54.988382 14.988366-42.104957-9.19236-85.346807-10.229992-87.167269l-0.447185-0.785899-41.167608-59.948347c15.722076-19.363 33.177634-37.309744 52.122101-53.586452l70.955028 39.45357 0.954745 0.500397c16.645099 8.190543 32.881898 12.342096 48.26219 12.341073 27.51875-0.004093 51.829436-13.014408 70.301136-37.625946 12.710486-16.934694 18.225083-33.561373 18.811438-35.401278l0.275269-0.862647 17.442254-76.349899c25.88146-2.697435 52.066843-2.982938 77.937047-0.86981l29.064966 79.462796 0.394996 1.00284c9.032724 21.314445 21.621437 37.349653 37.417191 47.659463 13.501502 8.812713 28.988218 13.280468 46.029336 13.279445 31.450293-0.002047 57.326637-15.289218 60.173474-17.032932l0.771573-0.471744 49.093115-36.059264c22.182208 17.521049 42.530652 37.250392 60.739363 58.894342l-34.975583 58.355059-0.531096 0.938372c-15.174608 28.466332-18.033725 55.369052-8.495488 79.963193 16.160051 41.670052 62.718437 58.608839 64.692395 59.309804l0.851391 0.301875 72.975035 19.185968c1.919722 16.286941 2.889817 32.796964 2.889817 49.249681C939.288666 505.662665 938.901857 516.073782 938.1354 526.426571z"  ></path>' +
    '' +
    '<path d="M523.849886 276.522917c-58.446134 0-113.394606 22.760376-154.721851 64.087621-41.328267 41.327244-64.087621 96.275717-64.087621 154.721851 0 120.652917 98.157577 218.810494 218.810494 218.810494s218.809471-98.157577 218.809471-218.810494c0-58.446134-22.760376-113.394606-64.087621-154.721851C637.243469 299.283294 582.296019 276.522917 523.849886 276.522917zM523.849886 671.164023c-96.954169 0-175.831634-78.877465-175.831634-175.831634 0-96.953146 78.877465-175.830611 175.831634-175.830611 96.953146 0 175.830611 78.877465 175.830611 175.830611C699.680497 592.286558 620.803032 671.164023 523.849886 671.164023z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.2 569.6c81.066667-55.466667 134.4-149.333333 134.4-256C825.6 140.8 684.8 0 512 0S200.533333 140.8 200.533333 311.466667c0 106.666667 53.333333 200.533333 134.4 256C151.466667 640 23.466667 817.066667 23.466667 1024c0 0 0 0 0 0l87.466667 0c0 0 0 0 0 0 0-204.8 155.733333-375.466667 354.133333-398.933333 2.133333 0 55.466667-4.266667 100.266667 0 2.133333 0 2.133333 0 4.266667 0 0 0 0 0 0 0 194.133333 27.733333 343.466667 194.133333 343.466667 396.8 0 0 0 0 0 0l89.6 0c0 0 0 0 0 0C1000.533333 817.066667 872.533333 640 691.2 569.6zM512 546.133333c-130.133333 0-234.666667-104.533333-234.666667-234.666667 0-130.133333 104.533333-234.666667 234.666667-234.666667 130.133333 0 234.666667 104.533333 234.666667 234.666667C746.666667 441.6 642.133333 546.133333 512 546.133333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baidu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M184.256 539.584C295.68 515.648 280.448 382.592 277.12 353.472 271.68 308.672 218.944 230.336 147.328 236.48c-90.112 8.064-103.296 138.24-103.296 138.24C31.872 434.88 73.216 563.456 184.256 539.584zM302.528 771.008c-3.264 9.344-10.56 33.28-4.224 54.144 12.416 46.656 53.056 48.768 53.056 48.768L409.6 873.92l0-142.528L347.136 731.392C319.04 739.776 305.472 761.536 302.528 771.008zM390.912 316.416c61.504 0 111.168-70.72 111.168-158.272C502.144 70.72 452.416 0 390.912 0 329.536 0 279.68 70.72 279.68 158.144 279.68 245.632 329.536 316.416 390.912 316.416zM655.744 326.848c82.176 10.688 134.976-77.056 145.472-143.488 10.752-66.368-42.24-143.552-100.416-156.8-58.368-13.376-131.136 80-137.728 140.928C555.136 241.984 573.76 316.352 655.744 326.848zM857.152 717.632c0 0-127.168-98.304-201.344-204.672C555.136 356.16 412.16 419.968 364.352 499.712 316.736 579.456 242.56 629.824 232 643.2c-10.688 13.184-153.6 90.304-121.856 231.168s143.168 138.112 143.168 138.112 82.112 8.192 177.344-13.184c95.296-21.12 177.344 5.312 177.344 5.312s222.592 74.56 283.52-68.992C952.384 792.064 857.152 717.632 857.152 717.632zM476.224 931.264 331.584 931.264c-62.528-12.48-87.36-55.168-90.56-62.4-3.072-7.36-20.864-41.664-11.392-99.968 26.944-87.424 104-93.696 104-93.696l77.056 0L410.688 580.48l65.536 1.088L476.224 931.264zM745.792 930.24 579.264 930.24c-64.512-16.64-67.52-62.592-67.52-62.592l0-184.128 67.52-1.088 0 165.568c4.096 17.536 26.048 20.8 26.048 20.8l68.544 0 0-185.344 71.936 0L745.792 930.24zM981.568 438.528c0-31.808-26.432-127.552-124.416-127.552-98.112 0-111.232 90.368-111.232 154.304 0 60.992 5.12 146.176 127.04 143.424C994.88 605.952 981.568 470.528 981.568 438.528z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiala" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M783.52 370.752 512 642.272 240.48 370.752 195.232 416 512 732.768 828.768 416Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 450.6 573.4 450.6 573.4 0 450.88 0 450.88 450.6 0 450.6 0 573.12 450.88 573.12 450.88 1024 573.4 1024 573.4 573.12 1024 573.12Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqishangyiqu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M947.885462 93.813642c-7.382131-4.237511-15.727193-4.237511-23.137976-0.042979L231.153614 491.626997c-7.366781 4.237511-11.606339 11.45796-11.606339 19.978007 0 8.478092 4.239558 15.697517 11.606339 19.964704l693.594895 397.813355c7.40976 4.222161 15.755846 4.222161 23.137976 0 7.364735-4.269233 11.559267-11.518335 11.559267-19.937075L959.445752 113.74867C959.444728 105.257276 955.25122 98.080829 947.885462 93.813642z"  ></path>' +
    '' +
    '<path d="M63.978127 90.630137l113.491821 0 0 841.920058-113.491821 0 0-841.920058Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baoming" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M597.398995 543.43392l276.865725-268.109294L751.225453 159.212118l-279.781124 276.221042L428.472632 543.145347l54.965869 59.85011L597.398995 543.43392zM949.539124 150.471037 880.272551 78.359672c0 0-20.659529-28.075429-44.864814-3.952009l-55.426357 57.613162 116.211768 112.966864 54.18304-53.761438C950.377212 191.226253 972.908368 173.758416 949.539124 150.471037zM860.892155 368.94384c-44.789089 0-49.877991 38.115086-49.877991 38.115086l0 424.469458c0 17.923208-14.58416 32.464389-32.57593 32.464389L192.110389 863.992773c-17.99177 0-32.573883-14.541181-32.573883-32.464389L159.536506 247.206218c0-17.926278 14.582113-32.458249 32.573883-32.458249l419.679361 0c0 0 37.371142-16.23066 37.371142-47.672766 0 0 2.181689-49.720402-34.461883-49.720402L159.536506 117.354801c-53.973262 0-97.721649 43.609217-97.721649 97.393167l0 649.244804c0 53.78395 43.748387 97.381911 97.721649 97.381911l651.477658 0c53.971216 0 97.721649-43.597961 97.721649-97.381911L908.735813 407.059949C908.735813 377.63785 860.892155 368.94384 860.892155 368.94384zM391.574257 631.569236l64.209394-9.613962-50.096978-46.442752L391.574257 631.569236z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M486.4 767.6416c-126.8224 0-230.0416-103.168-230.0416-230.0416s103.168-230.0416 230.0416-230.0416 230.0416 103.168 230.0416 230.0416-103.168 230.0416-230.0416 230.0416zM486.4 358.7584c-98.6112 0-178.8416 80.2304-178.8416 178.8416s80.2304 178.8416 178.8416 178.8416 178.8416-80.2304 178.8416-178.8416-80.2304-178.8416-178.8416-178.8416z"  ></path>' +
    '' +
    '<path d="M486.4 256c-14.1312 0-25.6-11.4688-25.6-25.6l0-153.6c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6l0 153.6c0 14.1312-11.4688 25.6-25.6 25.6z"  ></path>' +
    '' +
    '<path d="M486.4 1024c-14.1312 0-25.6-11.4688-25.6-25.6l0-153.6c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6l0 153.6c0 14.1312-11.4688 25.6-25.6 25.6z"  ></path>' +
    '' +
    '<path d="M179.2 563.2l-153.6 0c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6l153.6 0c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"  ></path>' +
    '' +
    '<path d="M947.2 563.2l-153.6 0c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6l153.6 0c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"  ></path>' +
    '' +
    '<path d="M230.4 307.2c-6.5536 0-13.1072-2.5088-18.1248-7.4752l-102.4-102.4c-9.984-9.984-9.984-26.2144 0-36.1984s26.2144-9.984 36.1984 0l102.4 102.4c9.984 9.984 9.984 26.2144 0 36.1984-5.0176 5.0176-11.5712 7.4752-18.1248 7.4752z"  ></path>' +
    '' +
    '<path d="M128 921.6c-6.5536 0-13.1072-2.5088-18.1248-7.4752-9.984-9.984-9.984-26.2144 0-36.1984l102.4-102.4c9.984-9.984 26.2144-9.984 36.1984 0s9.984 26.2144 0 36.1984l-102.4 102.4c-5.0176 5.0176-11.5712 7.4752-18.1248 7.4752z"  ></path>' +
    '' +
    '<path d="M844.8 921.6c-6.5536 0-13.1072-2.5088-18.1248-7.4752l-102.4-102.4c-9.984-9.984-9.984-26.2144 0-36.1984s26.2144-9.984 36.1984 0l102.4 102.4c9.984 9.984 9.984 26.2144 0 36.1984-5.0176 5.0176-11.5712 7.4752-18.1248 7.4752z"  ></path>' +
    '' +
    '<path d="M742.4 307.2c-6.5536 0-13.1072-2.5088-18.1248-7.4752-9.984-9.984-9.984-26.2144 0-36.1984l102.4-102.4c9.984-9.984 26.2144-9.984 36.1984 0s9.984 26.2144 0 36.1984l-102.4 102.4c-5.0176 5.0176-11.5712 7.4752-18.1248 7.4752z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cc-mic" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.221776 675.709549c-91.010807 0-164.984588-74.021877-164.984588-164.984588L346.237187 227.894384c0-90.986247 73.973782-164.984588 164.984588-164.984588 90.959641 0 164.982542 73.998341 164.982542 164.984588L676.204317 510.72496C676.204317 601.687672 602.181417 675.709549 511.221776 675.709549zM511.221776 110.047372c-64.956408 0-117.847012 52.892651-117.847012 117.847012L393.374764 510.72496c0 64.951291 52.890604 117.844965 117.847012 117.844965 64.954361 0 117.845988-52.893674 117.845988-117.844965L629.067764 227.894384C629.067764 162.940023 576.176137 110.047372 511.221776 110.047372z"  ></path>' +
    '' +
    '<path d="M817.620118 510.72496c0-13.006222-10.590196-23.570835-23.567765-23.570835-12.982686 0-23.569812 10.564613-23.569812 23.570835 0 142.980435-116.28033 259.259742-259.259742 259.259742-142.980435 0-259.261789-116.28033-259.261789-259.259742 0-13.006222-10.5421-23.570835-23.568788-23.570835-13.028735 0-23.568788 10.564613-23.568788 23.570835 0 161.02337 124.889405 293.415656 282.829554 305.47839l0 95.196129-70.707388 0c-13.028735 0-23.569812 10.588149-23.569812 23.570835 0 12.979616 10.540054 23.567765 23.569812 23.567765l188.553377 0c12.979616 0 23.569812-10.589173 23.569812-23.567765 0-12.983709-10.591219-23.570835-23.569812-23.570835l-70.708412 0 0-95.196129C692.775738 804.140617 817.620118 671.748331 817.620118 510.72496z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huidaodingbu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M951.807335 761.016089c-8.902568 0-17.702808-3.376836-24.45648-10.130509L510.874388 334.306785 94.295593 750.88558c-13.507345 13.507345-35.405616 13.507345-49.015289 0-13.507345-13.507345-13.507345-35.507944 0-49.015289l441.035275-441.035275c13.507345-13.507345 35.405616-13.507345 49.015289 0l441.035275 441.035275c13.507345 13.507345 13.507345 35.507944 0 49.015289C969.612471 757.639253 960.709903 761.016089 951.807335 761.016089z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shutiao-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M449.01755 0l128.001279 0L577.018829 1024 449.01755 1024 449.01755 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qiehuanbofangqi" viewBox="0 0 1157 1024">' +
    '' +
    '<path d="M66.064516 0l1024 0c36.335484 0 66.064516 29.729032 66.064516 66.064516l0 165.16129c0 36.335484-29.729032 66.064516-66.064516 66.064516l-1024 0c-36.335484 0-66.064516-29.729032-66.064516-66.064516l0-165.16129C0 29.729032 29.729032 0 66.064516 0z"  ></path>' +
    '' +
    '<path d="M49.548387 561.548387l1057.032258 0c26.425806 0 49.548387 23.122581 49.548387 49.548387l0 0c0 26.425806-23.122581 49.548387-49.548387 49.548387l-1057.032258 0c-26.425806 0-49.548387-23.122581-49.548387-49.548387l0 0C0 584.670968 23.122581 561.548387 49.548387 561.548387z"  ></path>' +
    '' +
    '<path d="M49.548387 924.903226l1057.032258 0c26.425806 0 49.548387 23.122581 49.548387 49.548387l0 0c0 26.425806-23.122581 49.548387-49.548387 49.548387l-1057.032258 0c-26.425806 0-49.548387-23.122581-49.548387-49.548387l0 0C0 948.025806 23.122581 924.903226 49.548387 924.903226z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shizi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M972.8 571.07456 1024 571.07456 1024 468.67456 972.8 468.67456 51.2 468.67456 0 468.67456 0 571.07456 51.2 571.07456ZM460.8 972.8 460.8 1024 563.2 1024 563.2 972.8 563.2 51.2 563.2 0 460.8 0 460.8 51.2Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suijibofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M641.792 641.194667l-128.469333-128.469334 0.085333-0.128-60.544-60.544-0.128 0.085334-153.301333-153.301334-0.426667 0.426667v-0.426667h-256v85.632h220.970667l342.101333 342.101334 0.085333-0.085334h169.642667l-78.464 78.464 60.330667 60.330667 180.394666-181.632 42.837334-42.837333-205.397334 0.298666h-133.717333z m176.042667 42.325333l0.469333 0.469333-0.469333 0.469334v-0.938667z"  ></path>' +
    '' +
    '<path d="M641.877333 384.170667h133.589334l205.397333 0.298666-42.837333-42.837333-180.394667-181.632-60.330667 60.330667 78.464 78.464h-169.728l-92.672 92.672 60.544 60.544 67.968-67.84z m175.957334-43.306667l0.469333 0.469333-0.469333 0.469334v-0.938667zM264.021333 640.853333h-221.013333v85.674667h256v-0.384l0.426667 0.426667 93.013333-92.970667-60.586667-60.544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-luntan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M378.664 544h288.024L680 554.36l43.92 34.168L832 672.6V544h34.664c19.224 0 35.984-7.504 49.568-21.096C929.84 509.312 936 491.232 936 472V136c0-19.232-6.16-37.312-19.768-50.912C902.64 71.488 885.888 64 866.664 64h-488c-19.232 0-38.648 7.488-52.248 21.088C312.824 98.688 304 116.768 304 136v336c0 19.232 8.824 37.312 22.416 50.904 13.6 13.6 33.016 21.096 52.248 21.096zM352 208v-72c0-6.408 3.832-12.44 8.36-16.976 4.536-4.528 11.896-7.024 18.304-7.024h488c6.416 0 11.104 2.496 15.64 7.024 4.528 4.536 5.696 10.568 5.696 16.976v336c0 6.416-1.168 12.44-5.704 16.968s-9.216 7.032-15.632 7.032H784v79.4L744.312 544 728 531.232 682.952 496H378.664c-6.408 0-13.768-2.504-18.304-7.04C355.832 484.44 352 478.416 352 472V208z" fill="#231815" ></path>' +
    '' +
    '<path d="M335.984 664H624c19.232 0 37.312-9.504 50.904-23.096 7.792-7.784 13.504-17.72 17.016-28.376L648 578.36V588c0 6.424-2.504 14.44-7.032 18.96-4.528 4.544-10.56 9.04-16.968 9.04H319.712l-62.696 46L216 691.4V616H136c-6.408 0-12.44-4.504-16.968-9.032-4.536-4.528-7.032-12.544-7.032-18.968v-336c0-6.408 2.496-10.44 7.024-14.976C123.56 232.496 129.592 232 136 232h136v-48H136c-19.232 0-37.312 5.488-50.912 19.088C71.488 216.688 64 232.768 64 252v336c0 19.232 7.496 39.312 21.088 52.904C98.68 654.504 116.768 664 136 664h32v124.6L335.984 664z" fill="#231815" ></path>' +
    '' +
    '<path d="M948.504 553.424c-10.472 10.456-22.672 18.144-36.504 21.16v184.832c0 6.424-2.504 12.752-7.032 17.272S894.408 784 888 784h-80v78.8l-41.016-31.096L704.28 784H400c-6.408 0-12.44-2.8-16.976-7.344A24.48 24.48 0 0 1 376 759.4V720h-32.016L328 731.984v27.416c0 19.232 7.496 37.616 21.088 51.208 13.6 13.592 31.68 21.392 50.912 21.392h288.016L856 960v-128h32c19.232 0 37.312-7.8 50.904-21.392S960 778.632 960 759.4V537.128a61.784 61.784 0 0 1-11.496 16.296z" fill="#231815" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqixiayiqu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M792.183 491.575l-693.527-397.774c-7.41-4.222-15.754-4.222-23.135 0-7.365 4.268-11.558 11.517-11.558 19.935v795.622c0 8.49 4.194 15.666 11.558 19.933 7.381 4.236 15.726 4.236 23.135 0.042l693.527-397.818c7.367-4.236 11.605-11.457 11.605-19.976 0-8.478-4.239-15.696-11.605-19.964z"  ></path>' +
    '' +
    '<path d="M845.863 90.633h113.481v841.837h-113.481v-841.837z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255 935.96l-0.028-0.028v0.029h0.028c9.13 10.666 13.71 22.47 13.71 35.412 0 14.478-5.148 26.85-15.445 37.147a50.686 50.686 0 0 1-37.175 15.445 55.596 55.596 0 0 1-17.72-2.873 47.216 47.216 0 0 1-15.445-8.533l-5.718-4.58-282.529-284.548c-67.837 48.013-143.725 71.99-227.604 71.99-8.391 0-16.953-0.37-25.713-1.109a277.608 277.608 0 0 1-25.742-3.441 368.059 368.059 0 0 1-162.44-59.447c-53.36-34.274-96.054-79.585-128.081-135.988a370.903 370.903 0 0 1-36.038-83.425 408.391 408.391 0 0 1-16.014-90.28 387.173 387.173 0 0 1 5.149-91.417 377.331 377.331 0 0 1 50.344-137.723 380.375 380.375 0 0 1 98.358-109.138c33.563-26.68 71.109-47.244 112.665-61.722A384.926 384.926 0 0 1 422.329 0c18.317 0 35.838 1.138 52.649 3.442 44.969 6.087 88.032 19.796 129.218 41.129a381.484 381.484 0 0 1 107.545 82.287c35.81 37.346 63.06 81.519 81.747 132.575 18.687 51.056 26.907 102.852 24.603 155.415-3.043 87.634-33.165 166.48-90.365 236.564l283.639 284.549h-1.11z m-251.64-522.25a320.558 320.558 0 0 0-22.868-137.126 323.573 323.573 0 0 0-40.048-75.432c-16.782-23.608-36.408-44.741-58.878-63.429a338.477 338.477 0 0 0-72.616-46.306A332.277 332.277 0 0 0 385.779 62.86a52.62 52.62 0 0 0-10.297 1.138l-6.883 1.138a324.568 324.568 0 0 0-135.533 54.27 323.26 323.26 0 0 0-98.927 106.862c-28.187 46.448-43.632 98.272-46.334 155.415-2.674 57.143 7.794 110.105 31.458 158.857a319.99 319.99 0 0 0 86.326 114.286 330.57 330.57 0 0 0 126.375 67.44c48.809 13.709 97.988 16.383 147.536 7.992a332.618 332.618 0 0 0 75.517-22.84 345.816 345.816 0 0 0 68.037-39.423 346.356 346.356 0 0 0 57.2-53.73c17.152-20.195 31.459-42.096 42.893-65.704v0.028a328.152 328.152 0 0 0 35.469-134.879z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)