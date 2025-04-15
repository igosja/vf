@php use App\Helpers\TableViewHelper; @endphp
@extends('layout.main')
@section('content')
    <div class="row">
        <div class="col">
            <h1 class="text-center">
                {{ __('Logs') }}
            </h1>
        </div>
    </div>
    <div class="row">
        <div class="col table-responsive">
            <form method="GET" class="mb-4 space-y-2">
                <div class="mb-3">
                    <input
                        class="form-control @error('id') is-invalid @enderror"
                        type="number"
                        name="id"
                        placeholder="{{ __('ID') }}"
                        value="{{ request('id') }}"
                    />
                    @error('id')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                    @enderror
                </div>
                <div class="mb-3">
                    <select class="form-control" name="level">
                        <option value="">{{ __('Level') }}</option>
                        @foreach($levels as $level)
                            <option value="{{ $level->value }}" @selected($level->value == request('level'))>
                                {{ $level->name }}
                            </option>
                        @endforeach
                    </select>
                </div>
                <button class="btn btn-outline-primary" type="submit">
                    {{ __('Filter') }}
                </button>
                <a class="btn btn-light" href="{{ route('logs.index') }}">
                    {{ __('Clear') }}
                </a>
            </form>
            <table class="table table-bordered">
                <tr>
                    <th>
                        <a href="{{ TableViewHelper::sortLink('id') }}">
                            #
                        </a>
                    </th>
                    <th>
                        <a href="{{ TableViewHelper::sortLink('created_at') }}">
                            {{ __('Created at') }}
                        </a>
                    </th>
                    <th>
                        <a href="{{ TableViewHelper::sortLink('level_name') }}">
                            {{ __('Level') }}
                        </a>
                    </th>
                    <th>
                        <a href="{{ TableViewHelper::sortLink('message') }}">
                            {{ __('Message') }}
                        </a>
                    </th>
                    <th></th>
                </tr>
                @foreach($logs as $log)
                    <tr>
                        <td>
                            {{ $log->id }}
                        </td>
                        <td>
                            {{ $log->created_at }}
                        </td>
                        <td>
                            {{ $log->level_name }}
                        </td>
                        <td>
                            {{ $log->message }}
                        </td>
                        <td>
                            <form action="{{ route('logs.destroy', ['log' => $log]) }}" method="POST">
                                @method('DELETE')
                                @csrf
                                <a
                                    href="{{ route('logs.show', ['log' => $log]) }}"
                                    class="btn btn-light btn-sm text-decoration-none"
                                >
                                    <i class="bi bi-eye"></i>
                                </a>
                                <button
                                    type="submit"
                                    class="btn btn-light btn-sm"
                                >
                                    <i class="bi bi-trash"></i>
                                </button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </table>
            {{ $logs->links() }}
        </div>
    </div>
@endsection
