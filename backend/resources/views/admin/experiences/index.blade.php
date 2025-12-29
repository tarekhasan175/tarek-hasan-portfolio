@extends('layouts.main')
@section('title', 'Experiences')
@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">Experiences</h4>
        </div>
        <div class="d-flex align-items-center flex-wrap text-nowrap">
            <a href="{{ route('admin.experiences.create') }}" class="btn btn-primary btn-icon-text mb-2 mb-md-0">
                <i class="btn-icon-prepend" data-lucide="plus"></i>
                Add Experience
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
                                    <th class="pt-0">Title</th>
                                    <th class="pt-0">Company</th>
                                    <th class="pt-0">Period</th>
                                    <th class="pt-0">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($experiences as $experience)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $experience->title }}</td>
                                    <td>{{ $experience->company }}</td>
                                    <td>{{ $experience->period }}</td>
                                    <td>
                                        <a href="{{ route('admin.experiences.edit', $experience->id) }}" class="btn btn-sm btn-primary">Edit</a>
                                        <form action="{{ route('admin.experiences.destroy', $experience->id) }}" method="POST" class="d-inline-block">
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
