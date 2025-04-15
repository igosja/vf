@extends('layout.main')
@section('content')
    <div class="row">
        <div class="col">
            <h1 class="text-center">Logs</h1>
        </div>
    </div>
    <div class="row">
        <div class="col table-responsive">
            <form method="GET" class="mb-4 space-y-2">
                <input type="number" name="id" placeholder="Id" value="{{ request('id') }}">
                <input type="text" name="level" placeholder="Level" value="{{ request('level') }}">
                <button class="btn btn-primary" type="submit">Filter</button>
                <a class="btn" href="/logs">Очистити</a>
            </form>
            <table class="table table-bordered">
                <tr>
                    <th>
                        <a href="?sort_by=id&direction={{ request('direction') === 'asc' ? 'desc' : 'asc' }}">
                            #
                        </a>
                    </th>
                    <th>
                        <a href="?sort_by=created_at&direction={{ request('direction') === 'asc' ? 'desc' : 'asc' }}">
                            Date
                        </a>
                    </th>
                    <th>Level</th>
                    <th>Message</th>
                    <th></th>
                </tr>
                @foreach($logs as $log)
                    <tr>
                        <td>{{ $log->id }}</td>
                        <td>{{ $log->created_at }}</td>
                        <td>{{ $log->level_name }}</td>
                        <td>{{ $log->message }}</td>
                        <td><a href="/logs/show/{{ $log->id }}">Show</a></td>
                    </tr>
                @endforeach
            </table>
            {{ $logs->links() }}
        </div>
    </div>
@endsection
