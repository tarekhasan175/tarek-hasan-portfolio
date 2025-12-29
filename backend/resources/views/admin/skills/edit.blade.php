@extends('layouts.main')
@section('title', 'Edit Skill')
@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">Edit Skill</h4>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 stretch-card">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('admin.skills.update', $skill->id) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="category" class="form-label">Category</label>
                            <select class="form-select" id="category" name="category" required>
                                <option value="backend" {{ $skill->category == 'backend' ? 'selected' : '' }}>Backend</option>
                                <option value="frontend" {{ $skill->category == 'frontend' ? 'selected' : '' }}>Frontend</option>
                                <option value="database" {{ $skill->category == 'database' ? 'selected' : '' }}>Database</option>
                                <option value="tools" {{ $skill->category == 'tools' ? 'selected' : '' }}>Tools</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">Skill Name</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ $skill->name }}" required>
                        </div>
                        <button type="submit" class="btn btn-primary me-2">Update</button>
                        <a href="{{ route('admin.skills.index') }}" class="btn btn-secondary">Cancel</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
