@extends('layouts.main')
@section('title', 'Projects')
@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">Projects</h4>
        </div>
        <div class="d-flex align-items-center flex-wrap text-nowrap">
            <a href="{{ route('admin.projects.create') }}" class="btn btn-primary btn-icon-text mb-2 mb-md-0">
                <i class="btn-icon-prepend" data-lucide="plus"></i>
                Add Project
            </a>
        </div>
    </div>

    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <div class="row">
        <div class="col-12 stretch-card">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th class="pt-0">#</th>
                                    <th class="pt-0">Image</th>
                                    <th class="pt-0">Project Name</th>
                                    <th class="pt-0">Start Date</th>
                                    <th class="pt-0">Due Date</th>
                                    <th class="pt-0">Status</th>
                                    <th class="pt-0">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($projects as $project)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>
                                        @if($project->image)
                                            <img src="{{ asset($project->image) }}" alt="{{ $project->title }}" style="width: 30px; height: 30px; object-fit: cover; border-radius: 50%;">
                                        @else
                                            -
                                        @endif
                                    </td>
                                    <td>{{ $project->title }}</td>
                                    <td>{{ $project->start_date ? $project->start_date->format('d/m/Y') : '-' }}</td>
                                    <td>{{ $project->due_date ? $project->due_date->format('d/m/Y') : '-' }}</td>
                                    <td>
                                        @if($project->status == 'completed')
                                            <span class="badge bg-success">Completed</span>
                                        @elseif($project->status == 'in_progress')
                                            <span class="badge bg-warning">In Progress</span>
                                        @else
                                            <span class="badge bg-info">Pending</span>
                                        @endif
                                    </td>
                                    <td>
                                        <a href="{{ route('admin.projects.edit', $project->id) }}" class="btn btn-sm btn-primary">Edit</a>
                                        <form action="{{ route('admin.projects.destroy', $project->id) }}" method="POST" class="d-inline-block">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure?')">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
