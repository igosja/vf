@extends('layout.main')
@section('content')
    <div class="row">
        <div class="col">
            <h1 class="text-center">{{ __('Log') }} #{{ $log->id }}</h1>
        </div>
    </div>
    <ul class="text-center list-inline">
        <li class="list-inline-item">
            <a href="{{ route('logs.index') }}" class="btn btn-light">
                {{ __('List') }}
            </a>
        </li>
        <li class="list-inline-item">
            <form action="{{ route('logs.destroy', ['log' => $log]) }}" method="POST">
                @method('DELETE')
                @csrf
                <button type="submit" class="btn btn-light">
                    {{ __('Delete') }}
                </button>
            </form>
        </li>
    </ul>
    <div class="row">
        <div class="col table-responsive">
            <table class="table table-bordered">
                <tr>
                    <td>{{ __('ID') }}</td>
                    <td>{{ $log->id }}</td>
                </tr>
                <tr>
                    <td>{{ __('Channel') }}</td>
                    <td>{{ $log->channel }}</td>
                </tr>
                <tr>
                    <td>{{ __('Context') }}</td>
                    <td>{{ json_encode($log->context) }}</td>
                </tr>
                <tr>
                    <td>{{ __('Created at') }}</td>
                    <td>{{ $log->created_at }}</td>
                </tr>
                <tr>
                    <td>{{ __('Datetime') }}</td>
                    <td>{{ $log->datetime }}</td>
                </tr>
                <tr>
                    <td>{{ __('Extra') }}</td>
                    <td>
                        {{ json_encode($log->extra) }}
                    </td>
                </tr>
                <tr>
                    <td>{{ __('Formatted') }}</td>
                    <td>{{ $log->formatted }}</td>
                </tr>
                <tr>
                    <td>{{ __('Level') }}</td>
                    <td>{{ $log->level }}</td>
                </tr>
                <tr>
                    <td>{{ __('Level name') }}</td>
                    <td>{{ $log->level_name }}</td>
                </tr>
                <tr>
                    <td>{{ __('Message') }}</td>
                    <td>{{ $log->message }}</td>
                </tr>
                <tr>
                    <td>{{ __('Updated at') }}</td>
                    <td>{{ $log->updated_at }}</td>
                </tr>
            </table>
        </div>
    </div>
@endsection
