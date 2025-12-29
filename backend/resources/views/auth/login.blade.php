<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarek H Portfolio | Log-in</title>

    <!-- color-modes:js -->
    <link rel="modulepreload" href="assets/js/color-modes-CkunOepb.js" />
    <script type="module" src="assets/js/color-modes-CkunOepb.js"></script>
    <script>
        (function() {
            const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ?
                'dark' : 'light');
            document.documentElement.setAttribute('data-bs-theme', theme);
        })();
    </script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <!-- End fonts -->

    <link rel="shortcut icon" href="assets/images/logo/th-fav.png">

    <!-- Splash Screen -->
    <link href="/assets/css/splash-screen.css" rel="stylesheet" />

    <!-- Main Css -->
    <link rel="stylesheet" href="assets/css/app-CHy6W3eO.css" />

</head>

<body>

    <script>
        // Create splash screen container
        var splash = document.createElement("div");
        splash.innerHTML = `
      <div class="splash-screen">
        <div class="logo"></div>
        <div class="spinner"></div>
      </div>`;

        // Insert splash screen as the first child of the body
        document.body.insertBefore(splash, document.body.firstChild);

        // Add 'loaded' class to body once DOM is fully loaded
        document.addEventListener("DOMContentLoaded", function() {
            document.body.classList.add("loaded");
        });
    </script>

    <div class="main-wrapper" id="app">
        <div class="page-wrapper full-page">
            <div class="page-content container-xxl d-flex align-items-center justify-content-center">
                <div class="row w-100 mx-0 auth-page">
                    <div class="col-md-8 col-xl-6 mx-auto">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-4 pe-md-0">
                                    <div class="auth-side-wrapper"
                                        style="background-image: url(assets/images/user/Profile.jpeg)">

                                    </div>
                                </div>
                                <div class="col-md-8 ps-md-0">
                                    <div class="auth-form-wrapper px-4 py-5">
                                        <a href="#" class="nobleui-logo d-block mb-2">Tarek <span>H</span></a>
                                        <h5 class="text-secondary fw-normal mb-4">Welcome back! Log in to your
                                            dashboard.
                                        </h5>
                                        <form class="forms-sample" action="{{ route('authenticate') }}" method="POST">
                                            @csrf
                                            <div class="mb-3">
                                                <label for="userEmail" class="form-label">Email</label>
                                                <input type="email" class="form-control @error('email') is-invalid @enderror" id="userEmail" name="email"
                                                    placeholder="Email" value="{{ old('email') }}">
                                                @error('email')
                                                    <div class="invalid-feedback">{{ $message }}</div>
                                                @enderror
                                            </div>
                                            <div class="mb-3">
                                                <label for="userPassword" class="form-label">Password</label>
                                                <input type="password" class="form-control @error('password') is-invalid @enderror" id="userPassword" name="password"
                                                    autocomplete="current-password" placeholder="Password">
                                                @error('password')
                                                    <div class="invalid-feedback">{{ $message }}</div>
                                                @enderror
                                            </div>
                                            <div>
                                                <button type="submit" class="btn btn-primary me-2 mb-2 mb-md-0">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
