@extends('layouts.main')
@section('title', 'Pricing Plans')
@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">Pricing Plans</h4>
        </div>
        <div class="d-flex align-items-center flex-wrap text-nowrap">
            <a href="{{ route('admin.pricings.create') }}" class="btn btn-primary btn-icon-text mb-2 mb-md-0">
                <i class="btn-icon-prepend" data-lucide="plus"></i>
                Add Plan
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
                                    <th class="pt-0">Name</th>
                                    <th class="pt-0">Price</th>
                                    <th class="pt-0">Unit</th>
                                    <th class="pt-0">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($pricings as $pricing)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $pricing->name }}</td>
                                    <td>{{ $pricing->price }}</td>
                                    <td>{{ $pricing->unit }}</td>
                                    <td>
                                        <a href="{{ route('admin.pricings.edit', $pricing->id) }}" class="btn btn-sm btn-primary">Edit</a>
                                        <form action="{{ route('admin.pricings.destroy', $pricing->id) }}" method="POST" class="d-inline-block">
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
