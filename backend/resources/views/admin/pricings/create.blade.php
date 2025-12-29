@extends('layouts.main')
@section('title', 'Add Pricing Plan')
@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">Add Pricing Plan</h4>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 stretch-card">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('admin.pricings.store') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="name" class="form-label">Plan Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="text" class="form-control" id="price" name="price" required>
                        </div>
                        <div class="mb-3">
                            <label for="unit" class="form-label">Unit (e.g. /per hour)</label>
                            <input type="text" class="form-control" id="unit" name="unit" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Features</label>
                            <div id="features-container">
                                <input type="text" class="form-control mb-2" name="features[]" placeholder="Feature 1">
                                <input type="text" class="form-control mb-2" name="features[]" placeholder="Feature 2">
                                <input type="text" class="form-control mb-2" name="features[]" placeholder="Feature 3">
                                <input type="text" class="form-control mb-2" name="features[]" placeholder="Feature 4">
                                <input type="text" class="form-control mb-2" name="features[]" placeholder="Feature 5">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                        <a href="{{ route('admin.pricings.index') }}" class="btn btn-secondary">Cancel</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
