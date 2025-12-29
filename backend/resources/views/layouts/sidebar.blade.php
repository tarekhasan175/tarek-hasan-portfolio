<nav class="sidebar">
    <div class="sidebar-header">
        <a href="{{ route('dashboard') }}" class="sidebar-brand">
            Tarek <span>H</span>
        </a>
        <div class="sidebar-toggler not-active">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="sidebar-body">
        <ul class="nav" id="sidebarNav">
            <li class="nav-item nav-category">Main</li>
            <li class="nav-item {{ request()->routeIs('dashboard') ? 'active' : '' }}">
                <a href="{{ route('dashboard') }}" class="nav-link">
                    <i class="link-icon" data-lucide="home"></i>
                    <span class="link-title">Dashboard</span>
                </a>
            </li>

            <li class="nav-item nav-category">Content</li>
            <li class="nav-item {{ request()->routeIs('admin.profile*') ? 'active' : '' }}">
                <a href="{{ route('admin.profile.edit') }}" class="nav-link">
                    <i class="link-icon" data-lucide="user"></i>
                    <span class="link-title">Profile</span>
                </a>
            </li>
            <li class="nav-item {{ request()->routeIs('admin.experiences*') ? 'active' : '' }}">
                <a href="{{ route('admin.experiences.index') }}" class="nav-link">
                    <i class="link-icon" data-lucide="briefcase"></i>
                    <span class="link-title">Experiences</span>
                </a>
            </li>
            <li class="nav-item {{ request()->routeIs('admin.educations*') ? 'active' : '' }}">
                <a href="{{ route('admin.educations.index') }}" class="nav-link">
                    <i class="link-icon" data-lucide="book-open"></i>
                    <span class="link-title">Education</span>
                </a>
            </li>
            <li class="nav-item {{ request()->routeIs('admin.services*') ? 'active' : '' }}">
                <a href="{{ route('admin.services.index') }}" class="nav-link">
                    <i class="link-icon" data-lucide="box"></i>
                    <span class="link-title">Services</span>
                </a>
            </li>
            <li class="nav-item {{ request()->routeIs('admin.projects*') ? 'active' : '' }}">
                <a href="{{ route('admin.projects.index') }}" class="nav-link">
                    <i class="link-icon" data-lucide="layers"></i>
                    <span class="link-title">Projects</span>
                </a>
            </li>
            <li class="nav-item {{ request()->routeIs('admin.testimonials*') ? 'active' : '' }}">
                <a href="{{ route('admin.testimonials.index') }}" class="nav-link">
                    <i class="link-icon" data-lucide="message-circle"></i>
                    <span class="link-title">Testimonials</span>
                </a>
            </li>
            <li class="nav-item {{ request()->routeIs('admin.skills*') ? 'active' : '' }}">
                <a href="{{ route('admin.skills.index') }}" class="nav-link">
                    <i class="link-icon" data-lucide="code"></i>
                    <span class="link-title">Skills</span>
                </a>
            </li>
            <li class="nav-item {{ request()->routeIs('admin.pricings*') ? 'active' : '' }}">
                <a href="{{ route('admin.pricings.index') }}" class="nav-link">
                    <i class="link-icon" data-lucide="dollar-sign"></i>
                    <span class="link-title">Pricing</span>
                </a>
            </li>

            <li class="nav-item nav-category">Messages</li>
            <li class="nav-item {{ request()->routeIs('admin.contacts*') ? 'active' : '' }}">
                <a href="{{ route('admin.contacts.index') }}" class="nav-link">
                    <i class="link-icon" data-lucide="mail"></i>
                    <span class="link-title">Inbox</span>
                </a>
            </li>
            <li class="nav-item nav-category">System</li>
            <li class="nav-item">
                <a href="{{ url('/') }}" target="_blank" class="nav-link">
                    <i class="link-icon" data-lucide="external-link"></i>
                    <span class="link-title">View Website</span>
                </a>
            </li>
            <li class="nav-item">
                <form action="{{ route('logout') }}" method="POST" id="logout-form" style="display: none;">
                    @csrf
                </form>
                <a href="#" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="nav-link">
                    <i class="link-icon" data-lucide="log-out"></i>
                    <span class="link-title">Log Out</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
