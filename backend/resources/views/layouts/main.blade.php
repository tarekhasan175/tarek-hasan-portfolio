<!DOCTYPE html>

<html>

<head>
    {{-- header link and script --}}
    @include('layouts.header')

</head>

<body data-base-url="https://nobleui.com/laravel/template/demo1">

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
        {{-- side navbar --}}
        @include('layouts.sidebar')


        <div class="page-wrapper">
            {{-- navbar --}}
            @include('layouts.navbar')


            <div class="page-content container-xxl">
                @yield('content')
            </div>

            {{-- navbar --}}
            @include('layouts.footer')
        </div>
    </div>

    <!-- base js -->
    <link rel="modulepreload" href="https://nobleui.com/laravel/template/demo1/build/assets/app-T1DpEqax.js" />
    <script type="module" src="https://nobleui.com/laravel/template/demo1/build/assets/app-T1DpEqax.js"></script>
    <script src="https://nobleui.com/laravel/template/demo1/build/plugins/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="https://nobleui.com/laravel/template/demo1/build/plugins/lucide/lucide.min.js"></script>
    <script src="https://nobleui.com/laravel/template/demo1/build/plugins/perfect-scrollbar/perfect-scrollbar.min.js">
    </script>
    <!-- end base js -->

    <!-- plugin js -->
    <script src="https://nobleui.com/laravel/template/demo1/build/plugins/flatpickr/flatpickr.min.js"></script>
    <script src="https://nobleui.com/laravel/template/demo1/build/plugins/apexcharts/apexcharts.min.js"></script>
    <!-- end plugin js -->

    <!-- common js -->
    <link rel="modulepreload" href="https://nobleui.com/laravel/template/demo1/build/assets/template-SkarxsqJ.js" />
    <script type="module" src="https://nobleui.com/laravel/template/demo1/build/assets/template-SkarxsqJ.js"></script> <!-- end common js -->

    <link rel="modulepreload" href="https://nobleui.com/laravel/template/demo1/build/assets/dashboard-BsrMSOB0.js" />
    <script type="module" src="https://nobleui.com/laravel/template/demo1/build/assets/dashboard-BsrMSOB0.js"></script>
</body>

</html>
