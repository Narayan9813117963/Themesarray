<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Themesarray</title>
    <link rel="icon" href="images/site-icon/favicon.ico">
    <link rel="stylesheet" href="dist/css/vendor.css">
    <link rel="stylesheet" href="dist/css/theme.css">
</head>

<body>
    <nav class="header position-fixed w-100">
        <div class="custom-container">
            <div class="row align-items-center w-100 flex-nowrap">
                <div class="col-6 col-lg-2">
                    <a href="../index.php"> 
                        <figure class="logo">
                        <img src="../images/logo.png" alt="logo">
                    </figure>
                </a>
                </div>
                <div class="col-lg-8 p-0 d-none d-lg-block">
                    <div class="navbar justify-content-end align-items-center">
                        <ul class="d-flex p-0 m-0">
                            <li>
                                <a href="../index.php" class="active"><span>Home</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Demos</span> <i class="bi bi-chevron-down"></i></a>
                            </li>
                            <li>
                                <a href="#"><span>Product pages</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Documentation</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-5 col-lg-2 p-0 d-none d-lg-flex justify-content-end">
                    <a href="#" class="d-flex primary-btn buy-btn"><i class="bi bi-bag"></i>Buy now</a>
                </div>
                <div class=" col-6 toggler-btn d-lg-none justify-content-end pe-0">
                    <div class=" d-flex align-items-center justify-content-end w-100">
                        <div class="bar-icon d-flex flex-column gap-2" data-bs-toggle="offcanvas" href="#offCanvas"
                            role="button" aria-controls="offCanvas">
                            <span class="w-100"></span>
                            <span class="w-100"></span>
                            <span class="w-100"></span>
                        </div>
                    </div>

                    <div class="offcanvas offcanvas-start hidden-nav" tabindex="-1" id="offCanvas"
                        aria-labelledby="offCanvasLabel">
                        <div class="offcanvas-header">
                            <div class="hidden-nav-logo">
                                <img src="../images/logo.png" alt="logo">
                            </div>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div class="offcanvas-contents">
                                <ul class="d-flex flex-column p-0">
                                    <li class="text-center"><a class="py-3 d-block  w-100" href="#">Home</a></li>
                                    <li class="text-center"><a class="py-3 d-block  w-100" href="#">About us</a></li>
                                    <li class="text-center"><a class="py-3 d-block  w-100" href="#">Menu</a></li>
                                    <li class="text-center"><a class="py-3 d-block  w-100" href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>