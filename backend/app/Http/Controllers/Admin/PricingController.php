<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pricing;
use Illuminate\Http\Request;

class PricingController extends Controller
{
    public function index()
    {
        $pricings = Pricing::all();
        return view('admin.pricings.index', compact('pricings'));
    }

    public function create()
    {
        return view('admin.pricings.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'unit' => 'required|string|max:255',
            'features' => 'nullable|array',
            'features.*' => 'string',
        ]);

        if (isset($validated['features'])) {
            $validated['features'] = array_values(array_filter($validated['features'], fn($value) => !is_null($value) && $value !== ''));
        }

        Pricing::create($validated);

        return redirect()->route('admin.pricings.index')->with('success', 'Pricing plan created successfully.');
    }

    public function edit(Pricing $pricing)
    {
        return view('admin.pricings.edit', compact('pricing'));
    }

    public function update(Request $request, Pricing $pricing)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'unit' => 'required|string|max:255',
            'features' => 'nullable|array',
            'features.*' => 'string',
        ]);

        if (isset($validated['features'])) {
            $validated['features'] = array_values(array_filter($validated['features'], fn($value) => !is_null($value) && $value !== ''));
        }

        $pricing->update($validated);

        return redirect()->route('admin.pricings.index')->with('success', 'Pricing plan updated successfully.');
    }

    public function destroy(Pricing $pricing)
    {
        $pricing->delete();
        return redirect()->route('admin.pricings.index')->with('success', 'Pricing plan deleted successfully.');
    }
}
