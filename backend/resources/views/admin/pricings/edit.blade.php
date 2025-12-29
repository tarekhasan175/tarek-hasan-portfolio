@extends('layouts.main')
@section('title', 'Edit Pricing Plan')
@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">Edit Pricing Plan</h4>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 stretch-card">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('admin.pricings.update', $pricing->id) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="name" class="form-label">Plan Name</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ $pricing->name }}" required>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="text" class="form-control" id="price" name="price" value="{{ $pricing->price }}" required>
                        </div>
                        <div class="mb-3">
                            <label for="unit" class="form-label">Unit (e.g. /per hour)</label>
                            <input type="text" class="form-control" id="unit" name="unit" value="{{ $pricing->unit }}" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Features</label>
                            <div id="features-container">
                                @if($pricing->features)
                                    @foreach($pricing->features as $feature)
                                        <input type="text" class="form-control mb-2" name="features[]" value="{{ $feature }}">
                                    @endforeach
                                @endif
                                <input type="text" class="form-control mb-2" name="features[]" placeholder="Add new feature">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary me-2">Update</button>
                        <a href="{{ route('admin.pricings.index') }}" class="btn btn-secondary">Cancel</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
