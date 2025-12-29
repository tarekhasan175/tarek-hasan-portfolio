@extends('layouts.main')
@section('title', 'Edit Profile')
@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">Edit Profile</h4>
        </div>
    </div>

    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <div class="row">
        <div class="col-md-12 stretch-card">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('admin.profile.update') }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ $profile->name }}" required>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" id="title" name="title" value="{{ $profile->title }}" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" value="{{ $profile->email }}" required>
                        </div>
                        <div class="mb-3">
                            <label for="bio" class="form-label">Bio</label>
                            <textarea class="form-control" id="bio" name="bio" rows="3">{{ $profile->bio }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="about_me" class="form-label">About Me</label>
                            <textarea class="form-control" id="about_me" name="about_me" rows="5">{{ $profile->about_me }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="cv_link" class="form-label">CV Link</label>
                            <input type="url" class="form-control" id="cv_link" name="cv_link" value="{{ $profile->cv_link }}">
                        </div>
                        
                        <button type="submit" class="btn btn-primary me-2">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
