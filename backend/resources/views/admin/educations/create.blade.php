@extends('layouts.main')
@section('title', 'Add Education')
@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">Add Education</h4>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 stretch-card">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('admin.educations.store') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="degree" class="form-label">Degree</label>
                            <input type="text" class="form-control" id="degree" name="degree" required>
                        </div>
                        <div class="mb-3">
                            <label for="institution" class="form-label">Institution</label>
                            <input type="text" class="form-control" id="institution" name="institution" required>
                        </div>
                        <div class="mb-3">
                            <label for="period" class="form-label">Period</label>
                            <input type="text" class="form-control" id="period" name="period" placeholder="e.g. 2015 - 2019" required>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" name="description" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                        <a href="{{ route('admin.educations.index') }}" class="btn btn-secondary">Cancel</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
