@extends('layouts.main')
@section('title', 'View Message')
@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">View Message</h4>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 stretch-card">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label fw-bold">From:</label>
                        <p>{{ $contact->name }} &lt;{{ $contact->email }}&gt;</p>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Date:</label>
                        <p>{{ $contact->created_at->format('d F Y, h:i A') }}</p>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Message:</label>
                        <div class="border p-3 rounded bg-light">
                            {{ $contact->message }}
                        </div>
                    </div>
                    <a href="{{ route('admin.contacts.index') }}" class="btn btn-secondary">Back to Inbox</a>
                </div>
            </div>
        </div>
    </div>
@endsection
